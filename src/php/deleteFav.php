<?php
include("./conn.php"); //資料庫連線
$addfavs =  json_decode(file_get_contents('php://input'), true);

// $member_ID = 4;
$member_ID = $addfavs['memberID'];
$product_info_ID = $addfavs['itemID'];

//建立SQL
$sql = "DELETE FROM JUMPER.fav WHERE member_ID = ? AND product_info_ID = ?";
// print_r($sql);exit();

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $member_ID);
$statement->bindValue(2, $product_info_ID);
$statement->execute();

echo '成功刪除最愛';
?>