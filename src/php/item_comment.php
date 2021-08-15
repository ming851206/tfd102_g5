<?php
include("./conn.php");

$sql = "SELECT c.product_ID, c.star, c.content, m.avatar, m.name
        From JUMPER.comment c
        join JUMPER.member m 
            on c.member_ID = m.ID
        where product_ID = 2;";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);
?>


