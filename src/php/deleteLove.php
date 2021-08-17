<?php
include("./conn.php"); //資料庫連線
include('./Lib/Member.php');

$memberID = getMemberID();
$addfavs =  json_decode(file_get_contents('php://input'), true);


//建立SQL
$sql = "DELETE FROM JUMPER.fav WHERE member_ID = ? AND product_info_ID = ?";
// print_r($sql);exit();

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $memberID);
$statement->bindValue(2, $addfavs['itemID']);
$statement->execute();

echo '成功刪除最愛';
?>