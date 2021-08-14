<?php
include("./conn.php"); //資料庫連線
include('Lib/Member.php');

$member_ID = getMemberID(); // 透過 session 取得 member_id

//建立SQL
$sql = "SELECT * FROM JUMPER.fav WHERE member_ID = ?;";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $member_ID);
$statement->execute();

$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

