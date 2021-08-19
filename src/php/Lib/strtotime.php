
<?php
// 抓取特婈時間的時間戳記
$date = "2021-07-31 23:59";
$timestamp = strtotime($date);
echo '這是時間戳記: ' . $timestamp . ' ,這是時間格式：' . date('yy-m-d h:m', $timestamp);


// 參考用法
// echo strtotime("now"), "\n";
// echo strtotime("10 September 2000"), "\n";
// echo strtotime("+1 day"), "\n";
// echo strtotime("+1 week"), "\n";
// echo strtotime("+1 week 2 days 4 hours 2 seconds"), "\n";
// echo strtotime("next Thursday"), "\n";
// echo strtotime("last Monday"), "\n";

