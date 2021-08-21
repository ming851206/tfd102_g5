<?php
include('./conn.php');
include('./Lib/Member.php');

$memberID = getMemberID();

if($memberID != "" ){
$getNewRecord = json_decode(file_get_contents('php://input'), true);

$sql = "INSERT into task_record values (null, ?, ?)";

$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $memberID);
$statement->bindValue(2, $getNewRecord["index"]);
$statement->execute();

$sql = "SELECT member_ID, task_ID
        FROM task_record
        where member_ID = ?
        Order by task_ID";
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $memberID);
$statement->execute();
$data = $statement->fetchAll();

echo json_encode($data);
}else{
echo -1;
}
?>