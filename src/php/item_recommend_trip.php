<?php
include("./conn.php");

$sql = "SELECT m.avatar, p.star_num, p.comment_count, p.place, p.title, p.intro_pics, p.event_price
        From product_info p
            join member m
                on p.member_ID = m.ID
        where p.ID != 2
        order by ceiling(rand()*100)
        limit 4;";

$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);
?>