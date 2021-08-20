<?php
include('./conn.php');

$ID = $_GET['theID']; // 被刪除 comment 的 ID
// print_r($ID);
// exit();
$now_timestamp = time(); // 抓取現在時間戳記

// ----- 這邊是補充的語法  -----
// $now_dateformt = date("Y-m-d H:i:s", $now_timestamp); // 將時間戳記轉換成時間格式
// $timestamp = strtotime("23-04-2020"); // 將某特定時間轉時間戳記

$sql = "UPDATE comment SET deleted_at = ? WHERE ID = ?";


$statement = getPDO()->prepare($sql);    
$statement->bindValue(1 , $now_timestamp); 
$statement->bindValue(2 , $ID); 
$statement->execute();

echo "評論刪除成功";
?>