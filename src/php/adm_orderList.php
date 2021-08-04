<?php

include('./conn.php');

//================前->後，php接值的寫法==================
// $name =  json_decode(file_get_contents('php://input'), true); //$name會是Array，下面可以用自己的寫法跑迴圈
// foreach($name as $value) {
//     echo $value."</br>";
// }
//======================================================

//建立SQL 
$sql = "SELECT t.ID, m.name, t.price, t.is_alerted, t.created_at
        FROM JUMPER.member m
        JOIN JUMPER.trip_order t 
        on m.ID = t.member_ID;";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>