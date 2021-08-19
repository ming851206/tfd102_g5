<?php
include("./conn.php");

$product_ID = json_decode(file_get_contents('php://input'), true);

$sql = "SELECT t2.ID, t2.place, t2.title, t2.intro_pics, t2.link, t2.event_price, t2.avatar, round(avg(c1.star), 1) as star_num, count(product_ID) as comment_count
        from comment c1
                        right join(    
                                        SELECT p.ID, m.avatar, p.place , p.link, p.title, p.intro_pics, p.event_price
                                        From product_info p
                                                join member m
                                                        on p.member_ID = m.ID
                                                join session s
                                                        on s.product_info_ID = p.ID
                                        where p.ID != ?
                        ) t2
                        on c1.product_ID = t2.ID
                        group by t2.ID  
        order by ceiling(rand()*100) desc
        limit 4;";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $product_ID["product_ID"]);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);
?>