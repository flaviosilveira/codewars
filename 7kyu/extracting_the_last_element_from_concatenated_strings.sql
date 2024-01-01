select title,
       CASE
           WHEN SUBSTRING(title,LENGTH(title)-POSITION('+' in REVERSE(title))+2) = '' THEN NULL
           ELSE SUBSTRING(title,LENGTH(title)-POSITION('+' in REVERSE(title))+2)
           END AS last_part
from split_titles
ORDER BY id DESC
