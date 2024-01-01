SELECT
    t.n,
    SUM(CASE WHEN s.i <= t.n THEN s.i::int ELSE 0 END) AS res
FROM
    triangular t
        LEFT JOIN LATERAL generate_series(1, t.n) AS s(i) ON true
GROUP BY
    t.id, t.n
ORDER BY
    t.id ASC;
