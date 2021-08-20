<?php
    include("./conn.php");
    $getdata = json_decode(file_get_contents('php://input'), true);

    $sqls = "SELECT * FROM member where username = ? or email = ?";

    $statement = getPDO()->prepare($sqls);
    $statement->bindValue(1, $getdata['account_register']);
    $statement->bindValue(2, $getdata['email_register']);

    $statement->execute();
    $data = $statement->fetchAll();

    if(count($data) < 1 && $getdata['account_register']!='' && $getdata['email_register']!='' && $getdata['password_register']!='' && $getdata['password_register_again']){
    //建立SQL
        $sql = "INSERT INTO member(username, email, password,level, account_status, created_at , avatar) VALUES (?,?,?,1,1,now() ,'./images/memberCenter/avatar.png')";

        // echo $_POST["account_register"];
        // exit();

        //執行
        $statement = getPDO()->prepare($sql);

        //給值
        $statement->bindValue(1, $getdata['account_register']);
        $statement->bindValue(2, $getdata['email_register']);
        $statement->bindValue(3, $getdata['password_register']);
        $statement->execute();

        echo 1;
    }else{
        if(count($data)>0){
            echo 0;
        }else{
            echo -1;
        }
    }
?>