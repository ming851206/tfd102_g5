<?php
// echo 'test';
// exit();
include('./conn.php');

//  get 數值
$data = json_decode(file_get_contents('php://input'), true);

// 轉換陣列
settype ($data ,"array");

// 觀看陣列長怎樣
print_r ($data);

//建立SQL
$sql = "UPDATE  member SET name=? , password = ? , phone = ? where ID = ? ";

//執行
$statement = getPDO()->prepare($sql);
 $statement->bindValue(1,$data["name"]);
 $statement->bindValue(2,$data["passwd"]);
 $statement->bindValue(3,$data["phone"]);
 $statement->bindValue(4,1);
$statement->execute();

//回傳json

?>