<?php
include('./conn.php');

// $getNewRecord = json_decode(file_get_contents('php://input'), true);

$sql = "DELETE from JUMPER.task_record Where member_ID = ?";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1,1);
$statement->execute();

$sql = "SELECT member_ID, task_ID
        FROM JUMPER.task_record
        where member_ID = ?
        Order by task_ID";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1,1);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);

?>