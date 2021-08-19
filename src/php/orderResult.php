<?php

$ecPayQueryString = http_build_query($_POST);

$redirectURL = $_SERVER["HTTP_ORIGIN"] . "/travel_payment.html?" . $ecPayQueryString;

header("Location: " . $redirectURL);