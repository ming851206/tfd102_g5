<?php
include('./conn.php');

$num = json_decode(file_get_contents('php://input'), true);

echo $num;
// // 轉換陣列
settype ($num ,"array");

// 觀看陣列長怎樣
print_r($num);
exit();
//建立SQL
$sql = "SELECT task_ID, question, option1, option2, option3, answer 
        FROM JUMPER.qa_list
        Where task_ID = 3
        order by ceiling(rand()*100) limit 3;";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>