<?php

include('./conn.php');

//建立SQL 
$sql = "SELECT p.ID, m.name, p.title, p.content, s.started_at, p.total_people, s.attendence, p.event_price  
        FROM product_info p
            JOIN member m 
            on p.member_ID = m.ID 
            JOIN session s
            on p.ID = s.product_info_ID 
        WHERE p.is_checked = 1 and p.deleted_at is null;";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>