<?php

include('./conn.php');
include('./Lib/Member.php');
//================前->後，php接值json的寫法==================

$member = getMemberID();

//建立SQL 
$sql = "INSERT INTO coupon_record
        SET is_used = 1
        WHERE member_ID = ?;";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $member);
$statement->execute();

echo('成功!');

?>