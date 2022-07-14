select t.index,
  val,
  val7,
  val14,
  val21,
  val364
from get_evolutivo(
    '{date_from}'::timestamp,
    '{date_to}'::timestamp,
    '{hours}',
    '{lines}',
    '{working_days}',
    '{metric}',
    '{agg_func}'
  ) t
  left join (
    select CASE
        WHEN '{date_from}'::date = '{date_to}'::date THEN index
        ELSE (index::date + INTERVAL '7 DAYS')::date::text
      END as index,
      val as val7
    from get_evolutivo(
        '{date_from}'::timestamp - INTERVAL '7 DAYS',
        '{date_to}'::timestamp - INTERVAL '7 DAYS',
        '{hours}',
        '{lines}',
        '{working_days}',
        '{metric}',
        '{agg_func}'
      )
  ) t7 on (t.index = t7.index)
  left join (
    select CASE
        WHEN '{date_from}'::date = '{date_to}'::date THEN index
        ELSE (index::date + INTERVAL '14 DAYS')::date::text
      END as index,
      val as val14
    from get_evolutivo(
        '{date_from}'::timestamp - INTERVAL '14 DAYS',
        '{date_to}'::timestamp - INTERVAL '14 DAYS',
        '{hours}',
        '{lines}',
        '{working_days}',
        '{metric}',
        '{agg_func}'
      )
  ) t14 on (t.index = t14.index)
  left join (
    select CASE
        WHEN '{date_from}'::date = '{date_to}'::date THEN index
        ELSE (index::date + INTERVAL '21 DAYS')::date::text
      END as index,
      val as val21
    from get_evolutivo(
        '{date_from}'::timestamp - INTERVAL '21 DAYS',
        '{date_to}'::timestamp - INTERVAL '21 DAYS',
        '{hours}',
        '{lines}',
        '{working_days}',
        '{metric}',
        '{agg_func}'
      )
  ) t21 on (t.index = t21.index)
  left join (
    select CASE
        WHEN '{date_from}'::date = '{date_to}'::date THEN index
        ELSE (index::date + INTERVAL '364 DAYS')::date::text
      END as index,
      val as val364
    from get_evolutivo(
        '{date_from}'::timestamp - INTERVAL '364 DAYS',
        '{date_to}'::timestamp - INTERVAL '364 DAYS',
        '{hours}',
        '{lines}',
        '{working_days}',
        '{metric}',
        '{agg_func}'
      )
  ) t364 on (t.index = t364.index)
