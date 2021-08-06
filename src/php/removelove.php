<?php
// echo 'test';
// exit();
include('./conn.php');

//  get 數值
$getdata = json_decode(file_get_contents('php://input'), true);

//建立SQL
$sql = "DELETE FROM fav WHERE ID = ?";

//執行
$statement = getPDO()->prepare($sql);
 $statement->bindValue(1,$getdata["ID"]);
$statement->execute();

//回傳json

?>