<?php

    //清除Session
    function clearSession(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        session_unset();
        session_destroy();

    }

    //--------------------------------------前台專用--------------------------------------

    //取得會員ID(前台專用)
    function getMemberID(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            // echo 'session不存在';
            session_start(); 
        }
        // echo 'session存在';
        // exit();

        //有登入session->回傳ID，無登入session->回傳空字串""
        // echo $_SESSION["memberID"];
        // exit();
        return isset($_SESSION["memberID"]) ? $_SESSION["memberID"] : ""; 

    }

    //取得會員帳號(前台專用)
    function getMemberName(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳Name，無登入session->回傳空字串""
        return isset($_SESSION["MemberName"]) ? $_SESSION["MemberName"] : ""; 

    }

    //寫入Session(前台專用)
    function setMemberInfo($MemberID, $MemberName){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //Table 'ec_member'裡的ID欄位值
        $_SESSION["memberID"] = $MemberID; 

        //Table 'ec_member'裡的Account欄位值
        $_SESSION["memberName"] = $MemberName; 
        
    }

?>