<?php
include('./conn.php');

$nums = json_decode(file_get_contents('php://input'), true);

//建立SQL
$sql = "SELECT task_ID, question, option1, option2, option3, answer
        FROM JUMPER.qa_list
        Where task_ID = ?
        order by ceiling(rand()*100) limit 3;";

//執行
$statement = getPDO()->prepare($sql);
 $statement->bindValue(1,$nums["num"]);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>