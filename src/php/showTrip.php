<?php
include("./conn.php"); //資料庫連線
$cat = $_GET['cat']; // 取得分類
// echo $cat;
// exit();
//建立SQL
// $sql = "SELECT * FROM product_info  WHERE category = ?";
$sql = "SELECT m.avatar, p.ID, p.category, p.link, p.intro_pics, p.star_num, p.comment_count, p.place, p.title, p.event_price, s.started_at, s.ended_at
    From product_info p
        join session s
        on p.ID = s.product_info_ID
        join member m
		on p.member_ID = m.ID
    where p.category = ? and s.started_at != ''
    order by s.started_at asc"; 

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1,$cat);
$statement->execute();

$data = $statement->fetchAll();

//回傳json
echo json_encode($data);
