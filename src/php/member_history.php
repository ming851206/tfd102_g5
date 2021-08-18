<?php
include("./conn.php");
include('./Lib/Member.php');
$memberID = getMemberID();
if($memberID!="" ){
    $getdata = json_decode(file_get_contents('php://input'), true);

    //建立SQL
    $sql = "select p1.ID , t3.avatar ,t3.name, t2.order_ID , t2.is_commented, p1.place , p1.title , p1.intro_pics , t2.vedio_link , t2.started_at , t2.ended_at , t1.staravg , t2.status
                    from product_info p1
                        join (
                                select product_ID , TRUNCATE(avg(star) ,1) as staravg
                                from comment
                                group by product_ID ) t1
                                on p1.ID = t1.product_ID
                        join
                                (SELECT s1.ID ,t1.ID as order_ID , t1.is_commented, s1.product_info_ID , s1.vedio_link , s1.started_at , s1.ended_at , t1.status
                                    from session s1
                                        join (
                                            SELECT ID  ,session_ID , is_commented ,status FROM trip_order WHERE member_ID = ?
                                            ) t1
                                                on t1.session_ID = s1.ID
                                                    where s1.ended_at < ?) t2
                                                    on t2.product_info_ID = p1.ID
						join(
                        select ID , name ,avatar
							from member
                            )t3
                            on t3.ID = p1.member_ID ";

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, $memberID);
    $statement->bindValue(2, $getdata['now']);
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);
}else{
    echo 0;
}
?>
