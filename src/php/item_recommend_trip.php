<?php
include("./conn.php");

$product_ID = json_decode(file_get_contents('php://input'), true);

$sql = "SELECT p.ID, m.avatar, p.star_num, p.comment_count, p.place, p.title, p.intro_pics, p.event_price
        From product_info p
            join member m
                on p.member_ID = m.ID
        where p.ID != ?
        order by ceiling(rand()*100)
        limit 4;";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $product_ID["product_ID"]);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);
?>