<?php
// echo 'test';
// exit();
include('./conn.php');

$getdata = json_decode(file_get_contents('php://input'), true);

//建立SQL
$sql = "INSERT INTO comment (member_ID , product_ID , star , content , create_at) VALUES (?,?,?,?,?);
            UPDATE trip_order set is_commented = 1 where ID = ?;
";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1,1);
$statement->bindValue(2,$getdata["ID"]);
$statement->bindValue(3,$getdata["star"]);
$statement->bindValue(4,$getdata["text"]);
$statement->bindValue(5,$getdata["now"]);
$statement->bindValue(6,$getdata["order_ID"]);
$statement->execute();

?>