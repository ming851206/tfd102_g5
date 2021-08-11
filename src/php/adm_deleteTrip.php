<?php

include('./conn.php');

$theID = $_GET['theID'];
$theTime = $_GET['delTime'];

// echo($theID);
// echo($theTime);
// exit();

//建立SQL 
$sql = "UPDATE `JUMPER`.`product_info` 
        SET `deleted_at` = ? 
        WHERE (`ID` = ?);";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $theTime);
$statement->bindValue(2, $theID);
$statement->execute();

//回傳json
echo('下架成功!');

?>