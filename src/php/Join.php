<?php
    include("./conn.php");    

    //建立SQL
    $sql = "INSERT INTO member(username, email, password,level, account_status, created_at) VALUES (?,?,?,1,1,?)";
    
    // echo $_POST["account_register"];
    // exit();

    //執行
    $statement = getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $_POST["account_register"]);
    $statement->bindValue(2, $_POST["email_register"]);
    $statement->bindValue(3, $_POST["password_register"]);
    $statement->execute();

    echo 1;
?>