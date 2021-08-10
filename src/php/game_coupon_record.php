<?php
include('./conn.php');

$name =  json_decode(file_get_contents('php://input'), true);

$sql = "INSERT into JUMPER.coupon_record values(null, ?, 2, 0);";

$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);

?>