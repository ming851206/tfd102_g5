<?php
//============join三個表================
// select *
// from
// 	comment c
//     join member m
// 		on c.member_ID = m.ID
// 	join product_info pi
// 		on c.product_ID = pi.ID
//======================================
include('./conn.php');

//建立SQL 
$sql = "SELECT c.id, pi.title, m.name, c.star, c.content, c.create_at
        FROM
	     comment c
        JOIN member m
		on c.member_ID = m.ID
	JOIN product_info pi
		on c.product_ID = pi.ID;";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>