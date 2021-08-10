<?php
include('./conn.php');

$getNewRecord = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT into JUMPER.task_record values (null, ?, ?)";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1,4);
$statement->bindValue(2,$getNewRecord["index"]);
$statement->execute();

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