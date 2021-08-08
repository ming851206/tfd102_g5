<?php
include("./conn.php"); //資料庫連線

//建立SQL

// 作法一：搜尋特定旅遊關鍵字(但沒成功)
// $search_item = $_GET['search_item']; // 取得分類
// echo $search_item; // 非洲
// $sql = "SELECT * FROM product_info  WHERE title LIKE '%" . $search_item . "%'"; // 作法一：搜尋特定旅遊關鍵字(但沒成功)

// 作法二：回傳全部旅遊，再由頁面去篩選
$sql = "SELECT * FROM product_info"; 

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);
