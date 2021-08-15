<?php
include("./conn.php");
include('./Lib/Member.php');
$memberID = getMemberID();

if($memberID!="" ){
    $getdata = json_decode(file_get_contents('php://input'), true);

    //建立SQL
    $sql = "insert into session values(null , ? , 0 , 0 , 'https://meet.google.com/fxm-isqs-umy' , ? , ?)";

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, $getdata['index']);
    $statement->bindValue(2, $getdata['start']);
    $statement->bindValue(3, $getdata['end']);
    $statement->execute();
    echo 1;
}else{
    echo 0 ;
}
?>
