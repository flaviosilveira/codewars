select
    product_id,
    COUNT(product_id) as total_unique_variants,
    SUM(CASE WHEN in_stock THEN 1 ELSE 0 END) as in_stock_variants
from product_variants
group by product_id
order by product_id asc
