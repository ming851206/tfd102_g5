<?php
include("./conn.php");

    $getdata = json_decode(file_get_contents('php://input'), true);

    //建立SQL
    $sql = "select ID , place , title , is_checked ,total_people from product_info where member_ID = ?";

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, 1);
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);

?>
