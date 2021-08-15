<?php
include("./conn.php");

$getnow = json_decode(file_get_contents('php://input'), true);

$sql = "SELECT s.started_at, s.ended_at
        From product_info p
            join session s
                on p.ID = s.product_info_ID
        where p.ID = ? and s.started_at > ? 
        order by s.started_at asc;";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1,2);
$statement->bindValue(2,$getnow["now"]);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);

?>