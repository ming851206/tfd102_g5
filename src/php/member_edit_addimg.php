<?php
// echo 'test';
// exit();
include('./conn.php');
include('./Lib/Member.php');
$memberID = getMemberID();

if($memberID!="" ){
        $fileName_arr = $_FILES["file"]["name"];    //檔案名稱含副檔名
        $fileTmpName_arr = $_FILES["file"]["tmp_name"]; //Server上的暫存檔路徑含檔名
        $fileType_arr = $_FILES["file"]["type"];    //檔案種類
        $fileSize_arr = $_FILES["file"]["size"];    //檔案尺寸
        $error_arr = $_FILES["file"]["error"];  //錯誤代碼
        $getid = $_POST['ID'];
        $sql = "UPDATE  product_info SET intro_pics = ? , pic1 =? , pic2 = ? , pic3 = ? ,pic4 = ? , pic5 = ? where ID = ? ";
        $statement = getPDO()->prepare($sql);
        for ($i=0; $i < count($fileName_arr); $i++) {
            $fileArr = explode(".", $fileName_arr[$i]);
            $subName = $fileArr[1];  //先判斷是不是圖檔再進行搬家，不會造成新家太多檔案
            if($subName == 'jpg' or $subName =='jpeg' or $subName == 'png' or $subName == 'bmp'){
                //Web根目錄真實路徑
                $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
                $sqlfilepath = "./images/FileUpload/".$fileName_arr[$i];
                //檔案最終存放位置
                $filePath = $ServerRoot."/tfd102/project/g5/images/FileUpload/".$fileName_arr[$i];
                //將暫存檔搬移到正確位置
                $filePath_Temp = $fileTmpName_arr[$i];
                move_uploaded_file($filePath_Temp, $filePath);
                $statement->bindValue($i + 1,$sqlfilepath);
            }
        }
        $statement->bindValue($i+1,$getid);
        $statement->execute();
        echo 1 ;

}else{
        echo 0;
}

function getExtensionName($filePath){
        $path_parts = pathinfo($filePath);
        return $path_parts["extension"];
    }
?>