<?php
include('./conn.php');

// $nums = json_decode(file_get_contents('php://input'), true);

//建立SQL
$sql = "SELECT member_ID, task_ID
        FROM JUMPER.task_record";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>