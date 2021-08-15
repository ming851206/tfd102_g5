<?php
include("./conn.php");

$sql = "SELECT c.product_ID, c.star, c.content, m.avatar, m.name
        From JUMPER.comment c
        join JUMPER.member m 
            on c.member_ID = m.ID
        where product_ID = ?;";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1,2);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);
?>


