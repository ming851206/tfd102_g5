<?php
// echo 'test';
// exit();
include('./conn.php');
include('./Lib/Member.php');
$memberID = getMemberID();

if($memberID!="" ){
//  get 數值
$getdata = json_decode(file_get_contents('php://input'), true);

// 建立SQL
$sql = "UPDATE  member SET name=? , password = ? , phone = ? , gender=?  , email=? , birthday = ? where ID = ? ";

//執行
$statement = getPDO()->prepare($sql);
 $statement->bindValue(1,$getdata["name"]);
 $statement->bindValue(2,$getdata["passwd"]);
 $statement->bindValue(3,$getdata["phone"]);
 $statement->bindValue(4,$getdata["gender"]);
 $statement->bindValue(5,$getdata["email"]);
 $statement->bindValue(6,$getdata["birthday"]);

 $statement->bindValue(7,$memberID);
$statement->execute();

$sql = "SELECT * FROM member WHERE ID = ? ";

//執行
$statement = getPDO()->prepare($sql);
 $statement->bindValue(1,$memberID);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);
// 回傳json
}else{
    echo 0;
}
?>