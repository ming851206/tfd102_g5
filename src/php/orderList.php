<?php

// 
include('./conn.php');
$id = $_GET["productid"];
echo($id);
exit();
//建立SQL 
$sql = "SELECT t.ID, m.name, t.price, t.is_alerted, t.created_at
        FROM JUMPER.member m
        JOIN JUMPER.trip_order t 
        on m.ID = t.member_ID;";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
// print_r($data);
// exit();
echo json_encode($data);


?>