<?php
include("./conn.php"); //資料庫連線
$cat = $_GET['cat']; // 取得分類
// echo $cat;
// exit();
//建立SQL
// $sql = "SELECT * FROM product_info  WHERE category = ?";
// $sql = "SELECT m.avatar, p.ID, p.category, p.link, p.intro_pics, p.star_num, p.comment_count, p.place, p.title, p.event_price, s.started_at, s.ended_at
//     From product_info p
//         join session s
//         on p.ID = s.product_info_ID
//         join member m
// 		on p.member_ID = m.ID
//     where p.category = ? and s.started_at != ''
//     order by s.started_at asc"; 

$sql = "SELECT t2.ID, t2.place, t2.category, t2.title, t2.intro_pics, t2.link, t2.event_price, t2.avatar, round(avg(c1.star), 1) as star_num, count(product_ID) as comment_count
from comment c1
                right join(    
                    SELECT  p.ID, m.avatar, p.category, p.place, p.link, p.title, p.intro_pics, p.event_price, s.started_at, s.ended_at
                    From product_info p
                        join session s
                        on p.ID = s.product_info_ID
                        join member m
                        on p.member_ID = m.ID
                    where p.category = ? and s.started_at != ''
                    order by s.started_at asc 
                ) t2
                on c1.product_ID = t2.ID
                group by t2.ID;  
"; 
//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1,$cat);
$statement->execute();

$data = $statement->fetchAll();

//回傳json
echo json_encode($data);
