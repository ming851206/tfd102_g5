<?php
include("./conn.php");
$array=[];
$newpasswd='';
for ($x = ord('a'); $x <= ord('z'); $x++){
    array_push($array,chr($x));
}
for($i = 0 ; $i <= 9 ; $i++){
    array_push($array,$i);
}

shuffle($array);
for($i = 0 ; $i < 10 ; $i++){
$newpasswd= $newpasswd . $array[$i];
}

$getdata = json_decode(file_get_contents('php://input'), true);

    //建立SQL
    $sql = "select * from member where email = ?";
    //執行
    $statement = getPDO()->prepare($sql);
    //給值
    $statement->bindValue(1, $getdata['email']);
    $statement->execute();
    $data = $statement->fetchAll();
if(count($data)>0){
    $sqls = "update member set password = ? where email = ?";
    //執行
    $statement = getPDO()->prepare($sqls);
    //給值
    $statement->bindValue(1, $newpasswd);
    $statement->bindValue(2, $getdata['email']);
    $statement->execute();
    echo $newpasswd;
}else{
    echo 0;
}

?>
