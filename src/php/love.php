<?php
// echo 'test';
// exit();
include('./conn.php');
include('./Lib/Member.php');
$memberID = getMemberID();
if($memberID!="" ){
    //建立SQL
    $sql = "select  t1.ID , t1.title , t1.content , t1.intro_pics , t1.place , TRUNCATE(avg(c1.star) ,1) as staravg
                        from comment c1
                                right JOIN (SELECT f.ID ,f.product_info_ID, p.title , p.content , p.intro_pics , p.place
                                            FROM fav f
                                                        JOIN product_info p
                                                            on f.product_info_ID = p.ID
                                            WHERE f.member_ID = ? ) t1
                                            on c1.product_ID = t1.product_info_ID
                                            group by t1.ID";


    //執行
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1,$memberID);
    $statement->execute();
    $data = $statement->fetchAll();

    //回傳json
    echo json_encode($data);
}else{
    echo 0;
}
?>