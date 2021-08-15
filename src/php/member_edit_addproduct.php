<?php
include("./conn.php");
include('Lib/Member.php');
if($memberID!="" && $memberName!=""){
    $getdata = json_decode(file_get_contents('php://input'), true);
    //建立SQL
    $sqls = "insert into product_info values(null,?,?,?,?,?,'img1','img2','img3','img4','img5','img6','link',10,?,0,0,'',0,'','');";

    $statement = getPDO()->prepare($sqls);
        //給值
    $statement->bindValue(1, $getdata['category']);
    $statement->bindValue(2, $memberID);
    $statement->bindValue(3, $getdata['place']);
    $statement->bindValue(4, $getdata['productTitle']);
    $statement->bindValue(5, $getdata['content']);
    $statement->bindValue(6, $getdata['event_price']);

    $statement->execute();


     $sql = "select ID , place , title , is_checked ,total_people , event_price ,content ,category from product_info where member_ID = ?";

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, $getdata['ID']);
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);
 }else{
    echo 0;
 }
?>
