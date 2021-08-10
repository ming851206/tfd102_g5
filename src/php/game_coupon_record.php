<?php
include('./conn.php');

$sql = "INSERT into JUMPER.coupon_record values(null, ?, 2, 0);";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1,4);
$statement->execute();

?>