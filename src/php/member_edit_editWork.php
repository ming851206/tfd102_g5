<?php
include("./conn.php");

    $getdata = json_decode(file_get_contents('php://input'), true);
    //建立SQL
    $sql = "select *
                    from session s1
                        join(
                            select ID ,  title  from product_info where member_ID =?
                        ) t1
                        on  t1.ID = s1.product_info_ID
                    where product_info_ID =?  and s1.ended_at > ?
                      order by started_at asc ;";

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, 1);
    $statement->bindValue(2, $getdata['index']);
    $statement->bindValue(3, $getdata['now']);
    $statement->execute();
    $data = $statement->fetchAll();
    if(count($data) < 1){
        $sqls = "UPDATE product_info SET event_price = ? , content = ? where ID = ?;";

        $statement = getPDO()->prepare($sqls);
        //給值
        $statement->bindValue(1, $getdata['money']);
        $statement->bindValue(2, $getdata['text']);
        $statement->bindValue(3, $getdata['index']);
        $statement->execute();
        echo 1;
    }else{
        echo 0;
    }
?>
