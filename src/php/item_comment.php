<?php
include("./conn.php");

$product_ID = json_decode(file_get_contents('php://input'), true);

$sql = "SELECT c.product_ID, c.star, c.content, m.avatar, m.name, c.deleted_at
        From comment c
        join member m 
            on c.member_ID = m.ID
        where product_ID = ? and c.deleted_at = '';";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $product_ID["product_ID"]);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);
?>

