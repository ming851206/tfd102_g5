<?php
    include("./conn.php");
    $account_register = $_POST['account_register'];
    $email_register = $_POST['email_register'];
    $password_register = $_POST['password_register'];
    

    //建立SQL
    $sql = "INSERT INTO member(username, email, password,level, account_status, created_at) VALUES (?,?,?,1,1,now())";
    
    // echo $_POST["account_register"];
    // exit();

    //執行
    $statement = getPDO()->prepare($sql);

    //給值
    $statement->bindValue(1, $account_register);
    $statement->bindValue(2, $email_register);
    $statement->bindValue(3, $password_register);
    $statement->execute();

    echo $account_register;
?>