<?php
// echo 'test';
// exit();
include('./conn.php');

//  get 數值
$getdata = json_decode(file_get_contents('php://input'), true);

//建立SQL
$sql = "DELETE FROM fav WHERE ID = ?";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1,$getdata["ID"]);
$statement->execute();

$sql = "select  t1.ID , t1.title , t1.content , t1.intro_pics , t1.place , TRUNCATE(avg(c1.star) ,1) as staravg
                    from comment c1
                            right JOIN (SELECT f.ID , p.title , p.content , p.intro_pics , p.place
                                        FROM fav f
                                                    JOIN product_info p
                                                        on f.product_info_ID = p.ID
                                        WHERE f.member_ID = 1 ) t1
                                        on c1.product_ID = t1.ID
                                        group by t1.ID ";


//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

//回傳json

?>