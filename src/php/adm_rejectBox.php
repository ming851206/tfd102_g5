<?php
//代修正

include('./conn.php');

//================前->後，php接值的寫法==================
$theID = json_decode(file_get_contents('php://input'), true); 

//print_r($theID);
$id = $theID['theID'];
$value = $theID['theValue'];

// echo $value;
// echo $id;
//exit();

//建立SQL 
$sql = "UPDATE `JUMPER`.`product_info` SET `is_checked` = '2', `reject_reason` = ? WHERE (`ID` = ?);";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $value);
$statement->bindValue(2, $id);
$statement->execute();

echo('退件成功!');

?>