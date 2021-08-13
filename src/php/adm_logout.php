<?php
    include("backend.php");

    //清空session
    clearSession();

    echo "<script>alert('登出成功!'); location.href = '../admin/login.html';</script>";  
?>