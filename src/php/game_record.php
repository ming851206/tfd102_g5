<?php
include('./conn.php');

// $nums = json_decode(file_get_contents('php://input'), true);

//建立SQL
$sql = "SELECT member_ID, task_ID
        FROM JUMPER.task_record
        where member_ID = ?
        Order by task_ID";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1,1);
$statement->execute();
$data = $statement->fetchAll();


//回傳json
echo json_encode($data);

?>