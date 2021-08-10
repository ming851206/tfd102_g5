<?php
include("./conn.php"); //資料庫連線
// $cat = $_GET['cat']; // 取得分類
// echo $cat;
// exit();
//建立SQL
$sql = "SELECT * FROM JUMPER.fav";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);
