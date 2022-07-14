/*
 delay > 0  hace que los jams que paran a 0 de speed no se registren
 */
SELECT *,
  extract(
    ISODOW
    from start_timestamp
  ) < 6 as is_working_day
FROM (
    SELECT uuid::int,
      TO_TIMESTAMP((creationMillis / 1000)::INT) - INTERVAL '5 HOURS' as start_timestamp,
      COALESCE(
        TO_TIMESTAMP((removeMillis / 1000)::INT),
        NOW()
      ) - INTERVAL '5 HOURS' as end_timestamp,
      TO_TIMESTAMP(
        (
          COALESCE(lastUpdateMillis, removeMillis, creationMillis) / 1000
        )::INT
      ) - INTERVAL '5 HOURS' as lastUpdate,
      delay / 60 as delay,
      length,
      speedKMH AS speed,
      line_json AS line,
      level,
      GREATEST(
        GREATEST(creationMillis, coalesce(removeMillis, 0)),
        coalesce(lastUpdateMillis, 0)
      ) as relevant_timestamp
    FROM public.Jams
    WHERE TIMESTAMPDIFF(
        MINUTE,
        TO_TIMESTAMP((creationMillis / 1000)::INT),
        COALESCE(
          TO_TIMESTAMP((removeMillis / 1000)::INT),
          NOW()
        )
      ) BETWEEN GREATEST(delay / 60, 2) AND 8 * 60
      AND LENGTH(street) > 0
      AND delay > 0
  ) temp
WHERE GREATEST(
    GREATEST(start_timestamp, end_timestamp),
    lastUpdate
  ) > :slice_start
  AND TIMESTAMPDIFF(
    HOUR,
    end_timestamp,
    lastUpdate
  ) < 12
ORDER BY relevant_timestamp ASC
