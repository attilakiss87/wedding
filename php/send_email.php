<?php
header("Content-Type: application/json; charset=UTF-8");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';
include 'result.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$body = '';
$mailto = 'kiss.attila1001@gmail.com';
$mailto2 = 'wagenhofferandrea@gmail.com';
$subject = 'wedding message notification';
$headers = "From: webmaster@aawedding.ddns.net";
$from = 'weddingsite';
if (property_exists($request, 'body')) {
    $body = $body.$request->body;
}
if (property_exists($request, 'from')) {
    $from = $request->from;
}

$mail = new PHPMailer;
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->Port = 587;
$mail->SMTPSecure = 'tls';
$mail->SMTPAuth = true;
$mail->Username = 'kiss.attila1001';
$mail->Password = 'DOctorwho00';
$mail->SetFrom('webmaster@aawedding.ddns.net');
$mail->addAddress($mailto);
// $mail->addCC($mailto2);
$mail->Subject = $subject;
$mail->msgHTML('Küldte: '.$from.'<br>'.$body);
$result = new Result;
if (!$mail->send()) {
    $error = "Valami hiba történt, kérlek próbáld meg később még egyszer.";
    $result->{'success'} = false;
    $result->{'message'} = $error;
} else {
    $result->{'success'} = true;
}
echo json_encode($result);

?>