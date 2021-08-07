<?php
    include("./conn.php");//資料庫連線

    //建立SQL
    $sql = "SELECT * FROM product_info  WHERE category = 1";
    
    //執行
    $statement = getPDO()->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
?>