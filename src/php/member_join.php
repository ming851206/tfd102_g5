<?php
include("./conn.php");

    $getdata = json_decode(file_get_contents('php://input'), true);

    //建立SQL
    $sql = "select p1.ID , p1.place , p1.title , p1.intro_pics ,t2.vedio_link , t2.started_at , t2.ended_at , t1.staravg
                    from product_info p1
                        join (
                                select product_ID , TRUNCATE(avg(star) ,1) as staravg
                                from comment
                                group by product_ID ) t1
                                on p1.ID = t1.product_ID
                        join
                                (SELECT s1.ID , s1.product_info_ID , s1.vedio_link , s1.started_at , s1.ended_at
                                    from session s1
                                        join (
                                            SELECT session_ID FROM trip_order WHERE member_ID =?
                                            ) t1
                                                on t1.session_ID = s1.ID
                                                    where s1.ended_at > ?) t2
                                                    on t2.product_info_ID = p1.ID";

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, 1);
    $statement->bindValue(2, $getdata['now']);

    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);

?>
