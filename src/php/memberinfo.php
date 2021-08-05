<?php
// echo 'test';
// exit();
include('./conn.php');

//建立SQL
$sql = "SELECT * FROM member WHERE ID = ? ";

//執行
$statement = getPDO()->prepare($sql);
 $statement->bindValue(1,1);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>