<?php
include("./conn.php");
include('./Lib/Member.php');
$memberID = getMemberID();
$getdata = json_decode(file_get_contents('php://input'), true);

    //建立SQL
    $sql = "delete from session where ID = ?";

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, $getdata['ID']);
    $statement->execute();

?>
