<?php

include('./conn.php');

//================前->後，php接值的寫法==================
$data = json_decode(file_get_contents('php://input'), true); 

$theID = $data['theID']; // 編號
$content = $data['content']; // 優惠券名稱
$code = $data['code']; // 折扣比例
$off_percent = $data['off_percent']; // 優惠碼
$expired_at = $data['expired_at']; // 使用期限
$source = $data['source']; // 來源

// print_r($content);
// exit();

//建立SQL 
$sql = "UPDATE `JUMPER`.`coupon` 
        SET `content` = ? , `code` = ? , `off_percent` = ? , `expired_at` = ?  , `source` = ?,
        WHERE `ID` = ? ;";

//執行
// print_r(getPDO());
// exit();
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $content);
$statement->bindValue(2, $code);
$statement->bindValue(3, $off_percent);
$statement->bindValue(4, $expired_at);
$statement->bindValue(5, $source);
$statement->bindValue(6, $theID);
// print_r($statement) ;
// exit();
$statement->execute();

echo('編輯成功!');
