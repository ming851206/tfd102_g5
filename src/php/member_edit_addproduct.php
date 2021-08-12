<?php
include("./conn.php");

    $getdata = json_decode(file_get_contents('php://input'), true);
    //建立SQL
    $sqls = "insert into product_info values(null,?,?,?,?,?,'img1','img2','img3','img4','img5','img6','link',10,?,0,80,'',0,'','');";

    $statement = getPDO()->prepare($sqls);
        //給值
    $statement->bindValue(1, $getdata['category']);
    $statement->bindValue(2, $getdata['ID']);
    $statement->bindValue(3, $getdata['place']);
    $statement->bindValue(4, $getdata['productTitle']);
    $statement->bindValue(5, $getdata['content']);
    $statement->bindValue(6, $getdata['event_price']);

    $statement->execute();
    echo 1;

?>
