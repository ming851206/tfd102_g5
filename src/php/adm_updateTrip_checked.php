<?php

include('./conn.php');

//================前->後，php接值的寫法==================
$theID = json_decode(file_get_contents('php://input'), true); 

//print_r($theID);
//echo('test');

foreach($theID as $value) {
    echo $value;
};
//print_r($value);
//exit();

//建立SQL 
$sql = "UPDATE `JUMPER`.`product_info` 
        SET `is_checked` = '1' 
        WHERE (`ID` = $value);";

//執行
$statement = getPDO()->prepare($sql);
$statement->execute();

?>