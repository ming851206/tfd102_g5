<?php
include("./conn.php");

$product_ID = $_GET['theID'];

$sql = "SELECT p.ID, p.title, p.intro_pics,p.event_price, p.comment_count, m.name, m.avatar
        From product_info p
            join member m on p.member_ID = m.ID
        Where p.ID = ?;";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $product_ID);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);

?>
