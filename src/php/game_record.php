<?php
include('./conn.php');

$sql = "SELECT member_ID, task_ID
        FROM JUMPER.task_record
        where member_ID = ?
        Order by task_ID";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1,4);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);

?>