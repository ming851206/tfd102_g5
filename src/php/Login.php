<?php
	
    include('conn.php');

    //建立SQL
    $sql = "SELECT * FROM member WHERE member_status = 1 and member_email= ? and member_password = ?";

    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["member_account_input"]);
    $statement->bindValue(2, $_POST["member_password_input"]);
    $statement->execute();
    $data = $statement->fetchAll();
    
    $memberEmail = "";
    $memberID = "";
    foreach($data as $index => $row){
        $memberAccount = $row["memberAccount"];
        $memberID = $row["member_id"];
    }

    //判斷是否有會員資料?
    if($memberEmail != "" && $memberID != ""){

        // include("../../Lib/Member.php");        
    
        //將會員資訊寫入session
        setMemberInfo($memberEmail, $memberID);

        //導回產品頁        
        echo "<script>alert('登入成功!'); location.href = '../../../index.html';</script>"; 

    }else{

        //跳出提示停留在登入頁
        echo "<script>alert('帳號或密碼錯誤!'); location.href = '../../../login_member.html';</script>"; 
    }

    //回傳json
    echo json_encode($data);
    // exit();

?>