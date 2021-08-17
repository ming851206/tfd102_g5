<?php
include('./conn.php');
include('./Lib/Member.php');

$memberID = getMemberID();

if($memberID != "" ){
$sql = "SELECT *
        from fav
        where member_ID = ?;";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $memberID);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);

}else{
   echo 0;
}
?>