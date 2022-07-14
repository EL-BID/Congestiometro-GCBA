INSERT INTO public.jams(
    uuid,
    line_id,
    start_timestamp,
    end_timestamp,
    hour,
    is_working_day,
    delay,
    length,
    speed,
    level
  )
VALUES (
    %(uuid) s,
    %(line_id) s,
    %(start_timestamp) s,
    %(end_timestamp) s,
    %(hour) s,
    %(is_working_day) s,
    %(delay) s,
    %(length) s,
    %(speed) s,
    %(level) s
  ) ON CONFLICT(uuid) DO
UPDATE
SET (
    line_id,
    start_timestamp,
    end_timestamp,
    hour,
    is_working_day,
    delay,
    length,
    speed,
    level
  ) = (
    EXCLUDED.line_id,
    EXCLUDED.start_timestamp,
    EXCLUDED.end_timestamp,
    EXCLUDED.hour,
    EXCLUDED.is_working_day,
    EXCLUDED.delay,
    EXCLUDED.length,
    EXCLUDED.speed,
    EXCLUDED.level
  );