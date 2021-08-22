<?php

use Ecpay\Sdk\Factories\Factory;
use Ecpay\Sdk\Services\UrlService;
use Ecpay\Sdk\Exceptions\RtnException;

require __DIR__ . '/vendor/autoload.php';
$totalmoney = $_POST['amt'];
$perprice = $_POST['evt_price'];
$people = $_POST['peopleNum'];
$title = $_POST['title'];

//exit();
try {
    $factory = new Factory([
        'hashKey' => '5294y06JbISpM5x9',
        'hashIv' => 'v77hoKGq4kWxNNIS',
    ]);
    $autoSubmitFormService = $factory->create('AutoSubmitFormWithCmvService');

    $OrderResultURL = $_SERVER["HTTP_ORIGIN"] . "/tfd102/project/g5/php/orderResult.php";
    $input = [
        'MerchantID' => '2000132',
        'MerchantTradeNo' => 'Test' . time(),
        'MerchantTradeDate' => date('Y/m/d H:i:s'),
        'PaymentType' => 'aio',
        'TotalAmount' => $totalmoney,
        'TradeDesc' => UrlService::ecpayUrlEncode('交易描述範例'),
        'ItemName' => $title.' TWD$'.$perprice.'x'.$people.'人',
        'ReturnURL' => $OrderResultURL,
        'OrderResultURL' => $OrderResultURL,
        'ChoosePayment' => 'ALL',
        'EncryptType' => 1,
    ];
    $action = 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5';

    echo $autoSubmitFormService->generate($input, $action);
} catch (RtnException $e) {
    echo '(' . $e->getCode() . ')' . $e->getMessage() . PHP_EOL;
}

?>