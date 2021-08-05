<?php
	
    include('conn.php');
    //  get 數值
    $data = json_decode(file_get_contents('php://input'), true);

    // 轉換陣列
    settype ($data ,"array");

    // 觀看陣列長怎樣
    print_r ($data);
    exit();

    //建立SQL
    $sql = "SELECT * FROM member WHERE account_status = 1 and username= ? and password = ?";

    //給值
    $statement = getPDO()->prepare($sql);
    $statement->bindValue(1, $_POST["account"]);
    $statement->bindValue(2, $_POST["password"]);
    $statement->execute();
    $data = $statement->fetchAll();
    
    $memberID = "";
    $memberName = "";
    foreach($data as $index => $row){
        $memberID = $row["ID"];
        $memberName = $row["Account"];
    }

    //判斷是否有會員資料?
    if($memberID != "" && $memberName != ""){

        include("./member.php");        
    
        //將會員資訊寫入session
        setMemberInfo($memberID, $memberName);

        //導回產品頁   
        // echo json_encode(0);

        echo "<script>alert('登入成功!'); location.href = '../../../member.html';</script>"; 

    }else{

        //跳出提示停留在登入頁
        // echo json_encode(1);

        echo "<script>alert('帳號或密碼錯誤!'); location.href = '../../../login_member.html';</script>"; 
    }

    //回傳json
    // echo json_encode($data);
    // exit();

?>