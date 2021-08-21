<?php

include('./conn.php');

//建立SQL 
$sql = "SELECT ID, name, username, level, email, phone, birthday, created_at, account_status FROM member;";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>