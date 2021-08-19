<?php

include('./conn.php');

//建立SQL 
$sql = "SELECT * FROM JUMPER.coupon WHERE deleted_at = ''";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>