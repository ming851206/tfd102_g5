<?php
// echo 'test';
// exit();
include('./conn.php');

$getdata = json_decode(file_get_contents('php://input'), true);

//建立SQL
$sql = "INSERT INTO comment (member_ID , product_ID , star , content) VALUES (?,?,?,?)";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1,1);
$statement->bindValue(2,2);
$statement->bindValue(3,$getdata["star"]);
$statement->bindValue(4,$getdata["text"]);
$statement->execute();

?>