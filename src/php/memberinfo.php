<?php
// echo 'test';
// exit();
include('./conn.php');
include('./Lib/Member.php');
$memberID = getMemberID();

if($memberID!="" ){
//建立SQL
$sql = "SELECT * FROM member WHERE ID = ? ";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1,$memberID);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);
}else{
    echo 0;
}
?>