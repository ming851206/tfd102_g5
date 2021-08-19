<?php

include('./conn.php');
include('./Lib/Member.php');
//================前->後，php接值json的寫法==================
$thePayment = json_decode(file_get_contents('php://input'), true); 

$member = getMemberID();
//$session = $thePayment['session'];
$price = $thePayment['price'];
$people = $thePayment['people'];

//建立SQL 
$sql = "INSERT INTO `JUMPER`.`trip_order` 
        (`ID`, `member_ID`, `session_ID`, `status`, `created_at`, `is_mailed`, `price`, `people`, `is_alerted`, `is_clicked`, `is_commented`) 
        VALUES (null ,?, '1', '1', UNIX_TIMESTAMP(), '0', ?, ?, '0', '0', '0');";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $member);
$statement->bindValue(2, $price);
$statement->bindValue(3, $people);
$statement->execute();

echo('成功!');

?>