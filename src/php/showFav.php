<?php
include("./conn.php"); //資料庫連線
$member_ID = 4;

//建立SQL
$sql = "SELECT * FROM JUMPER.fav WHERE member_ID = $member_ID";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);
