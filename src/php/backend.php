<?php

 //清除Session
 function clearSession(){

    //先判斷session是否存在
    if(!isset($_SESSION)){
        session_start(); //啟用session，session_start() 一定要放在網頁的最上方還沒有輸出任何東西之前
    }

    session_unset();
    session_destroy();

}

//取得Session(後台專用)
function getSessionB(){

    //先判斷session是否存在
    if(!isset($_SESSION)){
        session_start(); 
    }

    //有登入session->回傳ID，無登入session->回傳空字串""
    return isset($_SESSION["BackendUserID"]) ? $_SESSION["BackendUserID"] : "";             

}

 //寫入Session(後台專用)
 function setSessionB($UserID){

    //先判斷session是否存在
    if(!isset($_SESSION)){
        session_start(); 
    }

    $_SESSION["BackendUserID"] = $UserID;

}

?>