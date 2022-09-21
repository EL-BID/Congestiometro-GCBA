# Instrucciones de instalación, configuración y ejecución

## Contenidos

- [Instalación](#instalación)
- [Sobre el ETL](#sobre-el-etl)
- [Configuración](#configuración)

---

## Instalación

1. Tener instalado y en ejecución Docker Desktop o Docker Engine con el plug in de Docker Compose

2. Clonar el repo:

```bash
git clone git@github.com:EL-BID/Congestiometro-GCBA.git
```

3. Crear un archivo .env en la raíz del proyecto (siguiendo el ejemplo de .env.example), o tener definidas las siguientes variables de entorno:

   - ETL_DOCKER_CONTEXT: con la ubicación del contexto para la compilación de la imagen Docker del ETL

   - ETL_ENVIRONMENT_FILE: el archivo con variables de entorno de ejecución

   - ADMIN_SECRET: la clave de administración que servirá para resguardar todo el sistema (por defecto es ==congestiometro==)

4. Hacer ejecutables los scripts de la raíz del proyecto

```bash
chmod +x *.sh
```

5. Ejecutar el script de inicio

```bash
   ./startup.sh
```

6. Para detener su ejecución correr el script de detención

```bash
   ./stop.sh
```

## Requisitos de hardware

Los requisitos de hardware variarán seriamente dependiendo de la cantidad de información resguardada en la base de datos (por tiempo histórico de congestiones y tamañno de la ciudad) y la cantidad de usuarios simultaneos. Como refenrencia, para una ciudad como Buenos Aires, con casi 3 Millones de habitantes y otros tantos que ingresan diariamente, con dos años de historia y no más de 5 usuarios simultaneos, una máquina con 16 GB de RAM, 4 procesadores y disco SSD fue suficiente para que el sistema funcione rápidamente. Un dispositivo de lectura rápida, como SSD o NVMe es crítico para el debido funcionamiento del sistema, no habiéndose probado en soportes magnéticos.

## Sobre el ETL

El ETL (Extract, Transform and Load; extraer, transformar y cargar), es el único componente no estandarizable del sistema dado que es el que debe interactuar con los sistemas de cada ciudad. Al diseñar el congestiómetro, se estableció una estructura de datos a la cual debe adherir cualquier jurisdicción que prentenda usarlo exitosamente. Existe una implementación de referencia en la carpeta `/ETL` a la que se puede recurrir también.

La estructura de datos se encuntra resumida en el archivo de esquema `/database/schema.sql` y contiene las siguiente entidades:

<br/>

### Calles

---

Tabla maestra de calles

```sql
CREATE TABLE public.streets (
  street_id SERIAL PRIMARY KEY,
  street_type integer NOT NULL,
  street_base_name TEXT NOT NULL,
  street_name TEXT NOT NULL,
  street_sufix text,
  line geometry NOT NULL,
  last_update TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

- street_id: id único de cada calle
- street_type: tipo de calle, que debería seguir los mismos lineamientos que [Waze](https://wazeopedia.waze.com/wiki/UAE/Road_types)
- street_base_name: Nombre de la calle en la fuente de datos original
- street_name: Nombre mapeado de la calle (cuando se desea modificar o agrupar calles con nombres originales levemente distintos, vg. `Av. Rivadavia` y `Rivadavia`)
- street_sufix: sentido de la calle (normalmente `este`, `oeste`, `sur` y `norte` o sus iniciales),
- line geometry: geometría (linea) de la calle
- last_update: timestamp de la última actualización

<br/>

### Segmentos

---

Tabla maestra de segmentos de las calles que permite su análisis pormenorizado.

```sql
CREATE TABLE public.jam_lines (
  line_id SERIAL PRIMARY KEY,
  street_id integer REFERENCES streets NOT NULL,
  line geometry(LINESTRING) UNIQUE,
  last_update TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

- line_id: id único de cada segmento
- street_id: referencia al id de la calle al que pertenece
- line geometry: geometría (linea) del segmento
- last_update: timestamp de la última actualización

<br/>

### Divisiones Administrativas

---

Tabla maestra de división administrativas. Permite dos niveles jerárquicos equiparable a los niveles delineados por [Open Street Map](https://wiki.openstreetmap.org/wiki/Key:admin_level). Esta segmentación permite la división de la ciudad en dos niveles de grupos (uno contenido dentro del otro) que, por ejemplo, en la Ciudad de Buenso Aires, responde a las Comunas y los Barrios.

```sql
CREATE TABLE public.admin_levels (
  greater_admin_level_id integer NOT NULL,
  greater_admin_level_name text NOT NULL,
  lower_admin_level_id integer NOT NULL,
  lower_admin_level_name text NOT NULL,
  lines_ids text NOT NULL,
  streets_ids text NOT NULL,
  shape geometry(MultiPolygon) NOT NULL,
  last_update TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

- greater_admin_level_id: id del nivel administrativo superior (vg. Comuna)
- greater_admin_level_name: nombre del nivel administrativo superior
- lower_admin_level_id: id del nivel administrativo inferior (vg. Barrio)
- lower_admin_level_name: nombre del nivel administrativo inferior
- lines_ids: array convertido a texto que referencia a los ids de segmentos abarcados por el nivel administrativo inferior
- streets_ids: array convertido a texto que referencia a los ids de calles abarcados por el nivel administrativo inferior
- shape: el (multi) polígono que representa la forma del nivel inferior
- last_update: timestamp de la última actualización

<br/>

### Congestiones

---

Tabla principal transaccional que contiene todas los congesitones que se desean analizar.

```sql
CREATE TABLE public.jams (
  uuid integer NOT NULL PRIMARY KEY,
  line_id integer NOT NULL,
  start_timestamp timestamp without time zone NOT NULL,
  end_timestamp timestamp without time zone NOT NULL,
  hour integer [] NOT NULL,
  is_working_day integer NOT NULL,
  delay real NOT NULL,
  length real NOT NULL,
  speed real NOT NULL,
  level integer NOT NULL
);
```

- uuid: id único de la congestión
- line_id: referencia al id de segmento involucrado
- start_timestamp: timestamp del inicio de la congestión en tiempo local pero sin marca de huso horario
- end_timestamp: timestamp del fin de la congestión en tiempo local pero sin marca de huso horario
- hour: array de horas que abarco la congestion (por ejemplo, una congestión que duro desde las 7:55 a las 10:10 debería registrar [7, 8, 9, 10])
- is_working_day: si es un día hábil
- delay: demora en segundos
- length: largo en metros
- speed: velocidad en km/h
- level: nivel de la congestión, del 1 al 5, donde 1 es el mas leve y 5 el mas grave

## Configuración

<br/>

### Variablse de entorno

---

La principal forma de configuración del sistema es a través de las variables de entorno, éstas pueden estar definidas a nivel sistema operativo o en un archivo `.env` en la raíz del proyecto; tal como se describe en la sección de [Instalación](#instalación)

<br/>

### Días hábiles

---

Los días hábiles o inhábiles se puede actualizar modificando el archivo `/config/non_working_days.json` mientras la aplicación esta corriendo. Un sub-proceso detectará el cambio del archivo y se encargará de hacer las modificaciones necesarias en la base de datos.

El archivo tiene la estructura:

```json
{
  "non_working_days": ["YYYY-MM-DD", "YYYY-MM-DD", ...],
  "force_working_days": ["YYYY-MM-DD", "YYYY-MM-DD", ...]
}
```

Donde se establece un array de fechas con formato `YYYY-MM-DD` para non_working_days (dias que se quiera pasar de laborables a no laborables) y force_working_days (dias que se quiera pasar de no laborables a laborables). No es necesario que la lista contenga todos los días en el listado correcto, sino solo los que se quiere modificar.

<br/>

### Mapeo de nombres de calles

---

Si se quiere agrupar o modificar los nombres de calles sin apelar a una modificación mas complicada del ETL o de la base de datos subyacente, se puede utilizar el archivo `/config/streets.json` que, al igual que para los días hábiles, se puede modificar mientras la aplicación esta corriendo y un sub-proceso detectará el cambio del archivo y se encargará de hacer las modificaciones necesarias en la base de datos.

El archivo tiene la estructura:

```json
[
  { "street_base_name": "<NOMBRE BASE>", "street_name": "<NOMBRE NUEVO>"},
  { "street_base_name": "<NOMBRE BASE>", "street_name": "<NOMBRE NUEVO>"},
   ...
]
```

Donde se establece un array de objetos que pasan del nombre original (`street_base_name`) al mapeado (`street_name`)

<br/>

### Gestión de usuarios

---

Existen sólo dos tipos de usuarios, un `admin` que tiene la posibilidad de crear otros usuarios, y todos los demás. No hay un sistema complejo de permisos porque, a excepción de crear usuarios, todos tienen los mismo: acceso de solo lectura a los datos de jams.

La contraseña del usuario admin es

<br/>

### Logs

---

Para ver los logs deberás correr `docker compose logs <servicio>` o `docker-compose logs <servicio>` según tengas docker desktop o docker engine con el plugin de compose.
