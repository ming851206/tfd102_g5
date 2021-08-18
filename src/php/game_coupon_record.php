<?php
include('./conn.php');
include('./Lib/Member.php');

$memberID = getMemberID();

$sql = "INSERT into JUMPER.coupon_record values(null, ?, 2, 0);";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $memberID);
$statement->execute();

?>