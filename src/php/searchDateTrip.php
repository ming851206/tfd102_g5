<?php
include("./conn.php"); //資料庫連線

//建立SQL
// echo 'test';
// exit();

// 作法二：回傳全部旅遊，再由頁面去篩選
// $sql = "SELECT m.avatar, p.ID, p.link, p.intro_pics, p.star_num, p.comment_count, p.place, p.title, p.event_price, s.started_at, s.ended_at
//                     From product_info p
//                         join session s
//                         on p.ID = s.product_info_ID
//                         join member m
//                         on p.member_ID = m.ID
//                     where s.started_at != ''
//                     order by s.started_at asc"; 


// 偉明老師改的,第一版
// $sql = "SELECT
// p.ID, p.place, p.title, p.intro_pics, p.link, p.event_price,
//    m.avatar,
//    round(avg(c.star), 1) as star_num,
//    count(c.product_ID) as comment_count,
//    (select started_at from session where started_at != '' and product_info_ID = p.ID limit 1) as started_at_1
// from
// product_info p
//    join member m
//  on p.member_ID = m.ID
// join comment c
//  on c.product_ID = p.ID
// group by
// p.ID
// order by
// started_at_1;"; 

// 偉明老師改的,demo 第二版
$sql = "SELECT
 p.ID, p.place, p.title, p.intro_pics, p.link, p.event_price,
    m.avatar,
    c.star_num, c.comment_count,
    s.started_at
from
 product_info p
    join member m
  on p.member_ID = m.ID
 join session s
  on s.product_info_ID = p.ID
 join (select
   product_ID,
   round(avg(star), 1) as star_num,
   count(product_ID) as comment_count
  from comment
  group by product_ID) c
  on c.product_ID = p.ID
where
 s.started_at != ''
order by
 s.started_at;"; 

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);
