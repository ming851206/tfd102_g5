<?php

$ecPayQueryString = http_build_query($_POST);

echo "<script>alert('付款成功'); location.href = '../travel_list.html'; </script>";

?>