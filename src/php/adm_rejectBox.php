<?php

include('./conn.php');

//================前->後，php接值的寫法==================
$theID = json_decode(file_get_contents('php://input'), true); 

$id = $theID['theID'];
$value =  $theID['theValue'];

//exit();

//建立SQL 
$sql = "UPDATE `JUMPER`.`product_info` 
        SET `reject_reason` = $value
        WHERE (`ID` = $id);";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();

?>