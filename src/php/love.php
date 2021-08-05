<?php
// echo 'test';
// exit();
include('./conn.php');

//建立SQL
$sql = "SELECT p.category , p.title , p.content , p.intro_pics , p.comment_count ,c.star
             FROM fav f
                         JOIN product_info p
							on f.product_ID = p.category
                         JOIN comment c
							on f.product_ID = c.product_ID
             WHERE f.member_ID = 1 ";

// select p.category , sum(c.star)
// from product_info p
// 	 JOIN comment c
//         where p.category = c.product_ID
// group by
// 	p.category
//執行
$statement = getPDO()->prepare($sql);
 $statement->bindValue(1,1);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>