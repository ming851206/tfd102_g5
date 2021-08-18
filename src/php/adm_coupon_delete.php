<?php
include('./conn.php');

$ID = $_GET['theID']; // 被刪除 coupon 的 ID
$sql = "DELETE FROM coupon WHERE ID = " . $ID;

getPDO()->exec($sql);

?>