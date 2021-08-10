<?php
include('./conn.php');
 
//建立SQL
$sql = "SELECT task_ID, question, option1, option2, option3, answer 
        FROM JUMPER.qa_list
        Where task_ID = 4
        order by ceiling(rand()*100) limit 3;";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>