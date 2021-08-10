<?php

include('./conn.php');

$theID = $_GET['theID'];

//建立SQL 
$sql = "DELETE FROM `JUMPER`.`product_info` WHERE (`ID` = $theID);";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();

//回傳json
echo 1;

?>