<?php

include('./conn.php');

$theID = $_GET['theID'];

//建立SQL 
$sql = "UPDATE faq SET is_replied = '1' WHERE ID = ?";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $theID);
$statement->execute();

echo('更新狀態成功!');

?>