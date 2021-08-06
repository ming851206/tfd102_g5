<?php
    include("./conn.php");    

    //建立SQL
    $sql = "INSERT INTO member(username, password, account_status, CreateDate) VALUES (?,?,1,NOW())";

    //執行
    $statement = getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["account"]);
    $statement->bindValue(3, $_POST["email"]);
    $statement->bindValue(2, $_POST["password"]);
    $statement->execute();

    echo "<script>alert('加入成功'); location.href = '../member.html;</script>"; 
?>