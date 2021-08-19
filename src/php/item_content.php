<?php
include("./conn.php");

$product_ID = json_decode(file_get_contents('php://input'), true);

$sql = "SELECT t2.ID, t2.category, t2.place, t2.title, t2.content, t2.intro_pics, t2.pic1, t2.pic2, t2.pic3, t2.pic4, t2.pic5, t2.link, t2.event_price, t2.star_num, t2.comment_count, t2.name, t2.avatar , round(avg(c1.star), 1) as star_num, count(product_ID) as comment_count
        from comment c1
                join(
                    SELECT p.ID, p.category, p.place, p.title, p.content, p.intro_pics, p.pic1, p.pic2, p.pic3, p.pic4, p.pic5, p.link, p.event_price, p.star_num, p.comment_count, m.name, m.avatar
                        From product_info p
                            join member m 
                            on p.member_ID = m.ID
                        Where p.ID = ?) t2
                        on c1.product_ID = t2.ID;";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $product_ID["product_ID"]);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);

?>