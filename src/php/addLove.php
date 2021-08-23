<?php
include("./conn.php"); //資料庫連線
include('./Lib/Member.php');

$memberID = getMemberID();
$addfavs =  json_decode(file_get_contents('php://input'), true);
// $member_ID = 4;

//建立SQL
if($memberID!=''){
    $sql = "INSERT INTO fav (member_ID, product_info_ID) VALUES (?, ?)";

    //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $memberID);
    $statement->bindValue(2, $addfavs['itemID']);
    $statement->execute();

    echo '成功新增最愛';
}else{
    echo 0;
}
?>