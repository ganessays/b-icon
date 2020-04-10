<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$email=$_POST['email'];
$messsage=$_POST['messsage'];
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'ssl://smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'bicon.icon2018@gmail.com';                     // SMTP username
    $mail->Password   = 'ndlcqfevsysufwad';                               // SMTP password
    $mail->SMTPSecure = "SSL";         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom($email, 'Bicon Group');
    $mail->addAddress('bicon.icon2018@gmail.com',"Bicon");
    // grngrass11@gmail.com
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contact Mail';
    $mail->Body    = 'Name:'.$firstname.' '.$lastname.'<br>Email: '.$email.'<br>Message: '.$messsage;

    $mail->send();
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
session_start();$_SESSION['msg']="Success";
header('Location: ' . $_SERVER['HTTP_REFERER']);