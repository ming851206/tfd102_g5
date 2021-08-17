<?php
include("./conn.php");
include('./Lib/Member.php');
$memberID = getMemberID();
if($memberID!="" ){
    $getdata = json_decode(file_get_contents('php://input'), true);

    //建立SQL
    $sql = "select * from member where ID = ? ";

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, $memberID);
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);
}else{
    echo 0;
}
?>
