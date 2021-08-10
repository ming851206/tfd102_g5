<?php
    include("./conn.php");    

    //建立SQL
    $sql = "INSERT INTO member(username, email, password, account_status, CreateDate) VALUES (?,?,?,1,NOW())";

    //執行
    $statement = getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["account_register"]);
    $statement->bindValue(2, $_POST["email_register"]);
    $statement->bindValue(3, $_POST["password_register"]);
    $statement->execute();

    echo "<script>alert('加入成功'); location.href = '../member.html;</script>"; 
?>