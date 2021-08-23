<?php
include("./conn.php"); //資料庫連線
$addfavs =  json_decode(file_get_contents('php://input'), true);
// $member_ID = 4;
$member_ID = $addfavs['memberID'];
$product_info_ID = $addfavs['itemID'];

//建立SQL
$sql = "INSERT INTO fav (member_ID, product_info_ID) VALUES (?, ?)";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $member_ID);
$statement->bindValue(2, $product_info_ID);
$statement->execute();

echo '成功新增最愛';


