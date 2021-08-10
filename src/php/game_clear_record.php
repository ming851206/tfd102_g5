<?php
include('./conn.php');

$sql = "DELETE from JUMPER.task_record Where member_ID = ?";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1,4);
$statement->execute();

?>