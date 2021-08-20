<?php
include("./conn.php");

$sql = "SELECT p.ID, p.link, p.place, p.title, p.intro_pics, p.event_price, round(avg(c.star), 1) as star_num, count(c.product_ID) as comment_count
        from product_info p
            join comment c
                on p.ID = c.product_ID
        group by p.ID  
        order by star_num desc
        limit 4;";

$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);
?>