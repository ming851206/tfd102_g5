<?php
include('./conn.php');

$item =  json_decode(file_get_contents('php://input'), true);
$itemId = $item['itemId'];

//建立SQL
$sql = "UPDATE  trip_order SET is_alerted = 1 where ID = ? ";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1,$itemId);
$statement->execute();

$res = ['error' => 0, 'message' => '更新狀態成功'];
echo json_encode($res);
?>
