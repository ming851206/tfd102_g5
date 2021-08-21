<?php

include('./conn.php');
include('./Lib/Member.php');
//================前->後，php接值json的寫法==================
$thePayment = json_decode(file_get_contents('php://input'), true); 

$member = getMemberID();
$price = $thePayment['price'];
$people = $thePayment['people'];
$session = $thePayment['session'];
//建立SQL 
$sql = "INSERT INTO trip_order 
        (ID, member_ID, session_ID, status, created_at, is_mailed, price, people, is_alerted, is_clicked, is_commented) 
        VALUES (null ,? ,? , '1', UNIX_TIMESTAMP(), '0', ?, ?, '0', '0', '0');";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $member);
$statement->bindValue(2, $session);
$statement->bindValue(3, $price);
$statement->bindValue(4, $people);
$statement->execute();

echo('成功!');

?>