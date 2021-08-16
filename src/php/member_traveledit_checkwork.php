<?php
include("./conn.php");
include('./Lib/Member.php');
$memberID = getMemberID();
$getdata = json_decode(file_get_contents('php://input'), true);

    //建立SQL
    $sql = "select *
                    from session s1
                        join(
                            select ID as product_info_t1_ID ,  title  from product_info where member_ID =?
                        ) t1
                        on  t1.product_info_t1_ID = s1.product_info_ID
                    where product_info_ID =?  and s1.ended_at > ?
                      order by started_at asc ;";

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, $memberID);
    $statement->bindValue(2, $getdata['product']);
    $statement->bindValue(3, $getdata['now']);
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);

?>
