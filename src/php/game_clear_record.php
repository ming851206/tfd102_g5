<?php
include('./conn.php');
include('./Lib/Member.php');

$memberID = getMemberID();

$sql = "DELETE from task_record Where member_ID = ?";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $memberID);
$statement->execute();

?>