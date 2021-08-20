<?php
include("./conn.php"); //資料庫連線
$getdata = json_decode(file_get_contents('php://input'), true);

$content = $getdata["content"]; //優惠券名稱
$code = $getdata["code"]; //優惠碼
$off_percent = $getdata["off_percent"];   //折扣比例
$expired_at = $getdata["expired_at"];  // 使用期限 
$source = $getdata["source"]; // 來源

// print_r($source);
// exit();
//建立SQL
$sql = "INSERT INTO coupon (ID, content, code, off_percent, expired_at, source, is_edit) VALUES (null,?,?,?,?,?,0)";
//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $content);
$statement->bindValue(2, $code);
$statement->bindValue(3, $off_percent);
$statement->bindValue(4, $expired_at);
$statement->bindValue(5, $source);
$statement->execute();

echo '新增優惠券成功';
