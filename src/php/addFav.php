<?php
include("./conn.php"); //資料庫連線
$addfavs =  json_decode(file_get_contents('php://input'), true); //$name會是Array，下面可以用自己的寫法跑迴圈
// $member_ID = $addfavs['memberID'];
$member_ID = 4;
$product_info_ID = $addfavs['itemID'];
//建立SQL
$sql = "INSERT INTO JUMPER.fav (member_ID, product_info_ID) VALUES ($member_ID, $product_info_ID)";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

