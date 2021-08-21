<?php
include("./conn.php"); //資料庫連線

//建立SQL
// echo 'test';
// exit();

// 作法二：回傳全部旅遊，再由頁面去篩選
$sql = "SELECT m.avatar, p.ID, p.link, p.intro_pics, p.star_num, p.comment_count, p.place, p.title, p.event_price, s.started_at, s.ended_at
    From product_info p
        join session s
        on p.ID = s.product_info_ID
        join member m
		on p.member_ID = m.ID
    where s.started_at != ''
    order by s.started_at asc"; 

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);
