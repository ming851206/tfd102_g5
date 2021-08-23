<?php
    include("../php/conn.php");//資料庫連線

    //建立SQL
    $sql = "SELECT * FROM member WHERE level = 9
            and username = ?
            and password = ?";

    //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["username"]);
    $statement->bindValue(2, $_POST["pwd"]);
    $statement->execute();
    $data = $statement->fetchAll();

    //依資料筆數判斷是否為會員
    if(count($data) > 0){

        include("./backend.php");

        //將登入資訊寫入session
        setSessionB($_POST["username"]);

        //導回後台首頁
        header("Location: ../admin/adm_index.html");

    }else{

        //跳出提示停留在後台登入頁
        // echo "<script>alert('帳號或密碼錯誤!'); location.href = '../admin/login.html';</script>";

    }
?>