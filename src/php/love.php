<?php
// echo 'test';
// exit();
include('./conn.php');

//建立SQL
$sql = "select  t1.category , t1.title , t1.content , t1.intro_pics , t1.comment_count , TRUNCATE(avg(c1.star) ,1) as staravg
                    from comment c1
                            right JOIN (SELECT p.category , p.title , p.content , p.intro_pics , p.comment_count
                                        FROM fav f
                                                    JOIN product_info p
                                                        on f.product_ID = p.category
                                        WHERE f.member_ID = 1 ) t1
                                        on c1.product_ID = t1.category
                                        group by t1.category ";
//執行
$statement = getPDO()->prepare($sql);
$statement->execute();
$data = $statement->fetchAll();

//回傳json
echo json_encode($data);

?>