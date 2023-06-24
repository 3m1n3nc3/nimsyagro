<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'vendor/autoload.php';

$styles = "<style>
div .form-group {
    display: inline-flex;
    width: 100%;
    flex-flow: column;
    padding-top: 7px;
    padding-bottom: 7px;
    color: #5e5e5e;
    font-family: sans-serif;
}
.container {
    display: inline-flex; 
    width: 100%; 
    flex-flow: column; 
    place-items: center;     
    padding-top: 20px;
    padding-bottom: 20px;
}
.holder {
    max-width: 600px;
    padding: 10px;
    border: 1px solid #faf8f8;
    border-radius: 18px;
    box-shadow: 4px 7px 11px 0px rgb(91, 86, 86, 0.25);
}
</style>";

// Get the form data
$form = $_POST ?? [];

// Get the current url
$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_QUERY) ?? '';

// Get the full url where the form was submitted from
$origin = substr($_SERVER['HTTP_REFERER'] ?? '', 0, -1);
$origin .= $form['origin'] ?? '';

$fullname = $form['fullname'] ?? '';
$email = $form['email'] ?? '';
$subject = $form['subject'] ?? '';
$message = $form['message'] ?? '';

// Validate the form data
$err = [];
if (empty($fullname)) {
    $err['fullname'] = 'Full name is required';
}
if (empty($email)) {
    $err['email'] = 'Email is required';
}
if (empty($message)) {
    $err['message'] = 'Message is required';
}

if (empty($err)) {
    $mail = new PHPMailer(true);

    try {
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = '7ab324022c7376';
        $mail->Password = '8e5cbee2894a8e';

        //Recipients
        $mail->setFrom('from@example.com', 'NimsyAgro Contact Form');
        $mail->addAddress('joe@example.net');     //Add a recipient

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = "NimsyAgro Contact Message from $fullname";
        $mail->Body    =
        "$styles
<div class=\"container\">
    <div class=\"holder\">
        <div class=\"form-group\">Subject: <b>$subject</b></div>
        <div class=\"form-group\">Sender Name: <b>$fullname</b></div>
        <div class=\"form-group\">Sender Email Address: <b>$email</b></div>
        <div class=\"form-group\">
            <b>Contact Message:</b>
            <p style=\"margin: 0; padding: 0\">$message</p>
        </div>
    </div>
</div>";

        $mail->AltBody = $message;

        $mail->send();
    } catch (Exception $e) {
        $err["message"] = "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}


// Get the url parameters as an array
parse_str($url, $params);

if (!empty($origin) && stripos($origin, 'http') !== false) {
    if (!isset($params['success']) && empty($err)) {
        header("location: $origin?success=true");
    } elseif (!empty($err)) {
        header("location: $origin?success=false&" . http_build_query($err));
        ;
    }
}