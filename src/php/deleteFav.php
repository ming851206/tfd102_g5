<?php
include("./conn.php"); //資料庫連線
$addfavs =  json_decode(file_get_contents('php://input'), true);
$member_ID = 4;
$product_info_ID = $addfavs['itemID'];

// print_r($addfavs['itemID'] . '+' . $member_ID);
//建立SQL
$sql = "DELETE FROM JUMPER.fav WHERE member_ID = $member_ID AND product_info_ID = $product_info_ID";
// print_r($sql);exit();

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

