<?php
// echo 'test';
// exit();
include('./conn.php');
include('./Lib/Member.php');
$memberID = getMemberID();

if($memberID!="" ){
        $fileName = $_FILES["file"]['name']; // 檔案名稱含副檔名
        // ex: 3.jpg

        $fileArr = explode(".", $fileName);

        $subName = $fileArr[1];  //先判斷是不是圖檔再進行搬家，不會造成新家太多檔案
        if($subName == 'jpg' or $subName =='jpeg' or $subName == 'png' or $subName == 'bmp'){
             //取得上傳的檔案資訊=======================================
            $fileName = $_FILES["file"]["name"];    //檔案名稱含副檔名
            $filePath_Temp = $_FILES["file"]["tmp_name"];   //Server上的暫存檔路徑含檔名
            $fileType = $_FILES["file"]["type"];    //檔案種類
            $fileSize = $_FILES["file"]["size"];    //檔案尺寸
            //=======================================================

            //Web根目錄真實路徑
            $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
            $sqlfilepath = "./images/FileUpload/".$fileName;

            //檔案最終存放位置
            $filePath = $ServerRoot."/tfd102/project/g5/images/FileUpload/".$fileName;
            //將暫存檔搬移到正確位置
            move_uploaded_file($filePath_Temp, $filePath);
            $sql = "UPDATE  member SET avatar = ? where ID = ? ";

        // //執行
        $statement = getPDO()->prepare($sql);
        $statement->bindValue(1,$sqlfilepath);
        $statement->bindValue(2,$memberID);
        $statement->execute();
        echo 1 ;
        }else{
            echo 0;
        }
}else{
    echo 0;
}

function getExtensionName($filePath){
        $path_parts = pathinfo($filePath);
        return $path_parts["extension"];
    }
?>