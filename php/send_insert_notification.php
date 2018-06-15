<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require './PHPMailer/src/Exception.php';
require './PHPMailer/src/PHPMailer.php';
require './PHPMailer/src/SMTP.php';

function sendNotify($title, $artist) {

    $mailto = 'kiss.attila1001@gmail.com';
    $subject = 'new song';
    
    
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
    $mail->Subject = $subject;
    $mail->msgHTML('Új számot adtak hozzá!! Hurrá!!!<br>'.$artist.' - '.$title);
    if (!$mail->send()) {
        $error = "Valami hiba történt, kérlek próbáld meg később még egyszer.";
    }
}

?>