<?php
// echo 'test';
// exit();
include('./conn.php');

//  get 數值
$data = json_decode(file_get_contents('php://input'), true);

print_r($data);
//建立SQL
$sql = "UPDATE  member SET name=? , password = ? , phone = ? , gender=?  , email=? , birthday = ? where ID = ? ";

//執行
$statement = getPDO()->prepare($sql);
 $statement->bindValue(1,$data["name"]);
 $statement->bindValue(2,$data["passwd"]);
 $statement->bindValue(3,$data["phone"]);
 $statement->bindValue(4,$data["gender"]);
 $statement->bindValue(5,$data["email"]);
 $statement->bindValue(6,$data["birthday"]);

 $statement->bindValue(7,1);
$statement->execute();

//回傳json

?>