import { readFileSync } from 'fs';
import { watch } from 'chokidar';
import { hashSync, compareSync } from 'bcrypt';
import { create as createJWT, verify as verifyJWT } from 'njwt';
import axios from 'axios';

import express from 'express';
import { json as jsonBodyParser, urlencoded } from 'body-parser';
import cookieParser from 'cookie-parser';

import dayjs from 'dayjs';
import { Pool } from 'pg';

const db = new Pool();

async function createUser(username: string, password: string) {
  const hash = hashSync(password, 10);
  const query = {
    name: 'create-user',
    text: 'INSERT INTO users(username, hash) VALUES($1, $2) ON CONFLICT (username) DO UPDATE SET hash = EXCLUDED.hash RETURNING *',
    values: [username, hash],
  };
  const [user] = await db.query(query).then((q) => q.rows);
  return user;
}

async function setUserTokens(user: any, res: express.Response) {
  const { hash, refreshtoken, ...rest } = user;
  const newToken = createJWT(rest, process.env.ADMIN_SECRET);
  const newRefreshtoken = createJWT(rest, process.env.ADMIN_SECRET);

  newToken.setExpiration(dayjs().add(1, 'hours').toDate());
  const newRefreshtokenExpiration = dayjs().add(30, 'days').toDate();
  newRefreshtoken.setExpiration(newRefreshtokenExpiration);
  res.cookie('refreshtoken', newRefreshtoken.compact(), {
    secure: true,
    httpOnly: true,
    expires: newRefreshtokenExpiration,
  });

  const insert = {
    name: 'update-user-token',
    text: 'UPDATE users SET refreshtoken = $1 WHERE username = $2',
    values: [newRefreshtoken.compact(), user.username],
  };
  await db.query(insert);
  return { ...rest, token: newToken.compact() };
}

const app = express();
app.disable('x-powered-by');
app.use(urlencoded({ extended: false }));
app.use(jsonBodyParser());
app.use(cookieParser());

app.get('/status', async (req: express.Request, res: express.Response) => {
  const [now] = await db.query('SELECT NOW() as timestamp').then((r) => r.rows);
  res.status(200).json(now);
});

app.get('/hasura', async (req: express.Request, res: express.Response) => {
  try {
    if (req.get('authorization') || '' !== process.env.ADMIN_SECRET) {
      res.status(200).json({
        'X-Hasura-Role': 'admin',
        'X-Hasura-User-Id': 'admin',
      });
    } else {
      const token = verifyJWT(req.get('authorization') || '', process.env.ADMIN_SECRET)?.body?.toJSON();
      res.status(200).json({
        // FIXME: seguridad, agregar rol a hasura
        // 'X-Hasura-Role': token?.username === 'admin' ? 'admin' : 'user',
        'X-Hasura-Role': 'admin',
        'X-Hasura-User-Id': token?.username || 'anonymous',
      });
    }
  } catch {
    res.status(200).json({
      'X-Hasura-Role': 'anonymous',
    });
  }
});

app.post('/login', async (req: express.Request, res: express.Response) => {
  const query = {
    name: 'fetch-user',
    text: 'SELECT * FROM users WHERE username = $1',
    values: [req.body?.username],
  };
  const [user] = await db
    .query(query)
    .then((q) => q.rows)
    .catch(() => []);
  if (user?.hash && compareSync(req.body?.password || '', user?.hash)) {
    try {
      const { token } = await setUserTokens(user, res);
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: 'internal server error' });
    }
  } else {
    res.sendStatus(403);
  }
});

app.get('/refresh-token', async (req: express.Request, res: express.Response) => {
  const query = {
    name: 'fetch-user',
    text: 'SELECT * FROM users WHERE refreshToken = $1 LIMIT 1',
    values: [req.cookies.refreshtoken || ''],
  };
  const [user] = await db
    .query(query)
    .then((q) => q.rows)
    .catch(() => []);
  if (user) {
    try {
      const { token } = await setUserTokens(user, res);
      res.status(200).json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'internal server error' });
    }
  } else {
    res.sendStatus(403);
  }
});

// protected routes
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const token = verifyJWT(req.get('authorization') || '', process.env.ADMIN_SECRET)?.body?.toJSON();
    if (token?.username === 'admin') {
      next();
    } else {
      throw new Error();
    }
  } catch {
    res.sendStatus(403);
  }
});

app.post('/users', async (req: express.Request, res: express.Response) => {
  const user = await createUser(req.body['username'], req.body['password']).catch((err) => {
    console.error(err);
    if (err['code'] === '23505') {
      res.status(409).json({ message: 'Ya existe un usuario con ese nombre' });
    } else {
      res.status(500).json({ message: 'internal server error' });
    }
    return [];
  });

  if (user) {
    try {
      const userWithToken = await setUserTokens(user, res);
      res.status(201).json(userWithToken);
    } catch (error) {
      res.status(500).json({ message: 'internal server error' });
    }
  } else {
    res.end();
  }
});

app.get('/users', async (req: express.Request, res: express.Response) => {
  const query = { name: 'fetch-user', text: 'SELECT username FROM users' };
  const users = await db
    .query(query)
    .then((q) => q.rows)
    .catch(() => [] as any[]);
  res.status(200).json(users);
});

app.patch('/users/:username', async (req: express.Request, res: express.Response) => {
  const hash = hashSync(req.body['password'], 10);
  const query = {
    name: 'update-user-password',
    text: 'UPDATE users SET hash = $1 WHERE username = $2',
    values: [hash, req.params.username],
  };
  try {
    const result = await db.query(query);
    if (result.rowCount > 0) {
      res.sendStatus(200);
    } else {
      res.status(400).json({ message: 'No hay usuario con ese nombre' });
    }
  } catch (error) {
    res.status(500).json({ message: 'internal server error' });
  }
});

app.delete('/users/:username', async (req: express.Request, res: express.Response) => {
  // TODO: implementar
  res.status(405).json({ message: 'not implemented yet' });
});

app.use((req: express.Request, res: express.Response) => res.sendStatus(404).end());

app.listen(8888, () => console.log('Authentication server runnig at port 8888'));

watch('/config/non_working_days.json', { usePolling: true }).on('change', async (path) => {
  const data = JSON.parse(readFileSync(path).toString());
  for (const day of data['non_working_days']) {
    await db.query({
      name: 'update-working-days',
      text: 'UPDATE jams SET is_working_day = 0 WHERE date = $1::date',
      values: [day],
    });
  }
  for (const day of data['force_working_days']) {
    await db.query({
      name: 'update-force-working-days',
      text: 'UPDATE jams SET is_working_day = 1 WHERE date = $1::date',
      values: [day],
    });
  }
});
watch('/config/streets.json', { usePolling: true }).on('change', async (path) => {
  const data = JSON.parse(readFileSync(path).toString());
  for (const { street_base_name, street_name } of data) {
    await db.query({
      name: 'update-street-names',
      text: 'UPDATE streets SET street_name = $1, last_update = $2 WHERE street_base_name = $3',
      values: [street_name, new Date(), street_base_name],
    });
  }
});
createUser('admin', process.env['ADMIN_SECRET'] || 'congestiometro').then(({ username }) =>
  console.log('Created admin user with password set in process.env["ADMIN_SECRET"]')
);
(async function () {
  const headers = { 'X-Hasura-Admin-Secret': process.env['ADMIN_SECRET'] || 'congestiometro' };
  [
    'streets',
    'jam_lines',
    'admin_levels',
    'jams',
    'jams_agg_line',
    'simple_line_type',
    'histogram_type',
    'evolutivo_type',
    'predictivo_type',
    'comparativo_type',
  ].map((name) => {
    const body = {
      type: 'track_table',
      args: {
        schema: 'public',
        name,
      },
    };
    return axios
      .post('http://graphql-engine:8080/v1/query', body, { headers })
      .then(() => console.log(name, 'OK'))
      .catch(() => console.log(name, 'ERROR:'));
  });
  ['get_jams_lines', 'get_evolutivo', 'get_comparativo', 'get_summary', 'get_predictivo', 'get_lines'].map(
    (name) => {
      const body = {
        type: 'track_function',
        args: {
          schema: 'public',
          name,
        },
      };
      return axios
        .post('http://graphql-engine:8080/v1/query', body, { headers })
        .then(() => console.log(name, 'OK'))
        .catch(() => console.log(name, 'ERROR:'));
    }
  );
})()
  .then(() => console.log('Hasura initialized correctely'))
  .catch(console.error);
