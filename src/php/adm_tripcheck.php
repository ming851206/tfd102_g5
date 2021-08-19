<?php

include('./conn.php');

//建立SQL 
$sql = "SELECT p.ID, m.name, p.title, p.content, p.total_people, p.event_price  
        FROM product_info p
            JOIN member m 
            on p.member_ID = m.ID 
            WHERE p.is_checked = 0 and p.reject_reason = '';";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>