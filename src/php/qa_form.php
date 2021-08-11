<?php

include('./conn.php');

//================前->後，php接值的寫法==================
$theForm = json_decode(file_get_contents('php://input'), true); 

//print_r($theForm);
$name = $theForm['name'];
$mail = $theForm['email'];
$content = $theForm['content'];

//exit();

//建立SQL 
$sql = "INSERT INTO `JUMPER`.`faq` (`name`, `email`, `content`) VALUES (?, ?, ?);";

//執行
$statement = getPDO()->prepare($sql);
$statement->bindValue(1, $name);
$statement->bindValue(2, $mail);
$statement->bindValue(3, $content);
$statement->execute();

echo('傳送成功!');

?>