<?php
include("./conn.php");

$sql = "SELECT  p.ID, p.category, p.place, p.title, p.content, p.intro_pics, p.pic1, p.pic2, p.pic3, p.pic4, p.pic5, p.link, p.event_price, p.star_num, p.comment_count, m.name, m.avatar
        From product_info p
            join member m on p.member_ID = m.ID
        Where p.ID = ?;";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1,2);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);

?>



