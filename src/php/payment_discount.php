<?php
include("./conn.php");

    $getdata = json_decode(file_get_contents('php://input'), true);

    //建立SQL
    $sql = "select c.content
                    from JUMPER.coupon c
                        join
                            JUMPER.coupon_record r on c.ID=r.coupon_record_ID where r.member_ID= ? and r.is_used=1 and c.expired_at >= UNIX_TIMESTAMP();
            ";

    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, $getdata['ID']);
    $statement->execute();
    $data = $statement->fetchAll();
    echo json_encode($data);

?>
