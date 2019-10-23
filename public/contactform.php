<?php

//require "vendor/autoload.php";
require __DIR__.'/../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$developmentMode = true;
//For local development
//    keep the $developmentMode variable set to true
//For live server
//    change the $developmentMode variable to false
$mailer = new PHPMailer($developmentMode);
try{

	$mailer->SMTPDebug = 1;// 1 to enables SMTP debug (for testing) on local,
    // 0 to disable debug (for production) on server
	$mailer->isSMTP();
	if($developmentMode){
		$mailer->SMTPOptions = [
			'ssl'=> [
				'verify_peer' => false,
				'verify_peer_name' => false,
				'allow_self_signed' => true
			]
		];
	}

	$mailer->Host = 'smtp.gmail.com';
	$mailer->SMTPAuth = true;
	$mailer->Username = 'mailer.service.remedium@gmail.com';
	$mailer->Password = '1qaz2wsx3edcGo';
	$mailer->SMTPSecure = 'tls';
	$mailer->Port = 587;



	if(isset($_POST['email'])) {
		$from = $_POST['email'];
	}
	// Dynamic subject from contact form if set otherwise default value.
	if(isset($_POST['subject'])) {
		$subject = $_POST['subject'];
	}
	else {
		$subject = 'Message from Contact Remedium Pharmacy ';
	}

	// contact form other fields
    $body='';
	foreach($_POST as $k => $val)
	{
		$body .=  ucfirst($k) . ": " . $val . "<br>";
	}
	// set header
	$headers = "From: $from";
	// attachment work
	if(!empty($_FILES['attach_file']['name'])) {
		// boundary
		$semi_random = md5(time());
		$mime_boundary = "==Multipart_Boundary_x{$semi_random}x";
		// headers for attachment
		$headers .= "\nMIME-Version: 1.0\n" . "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\"";
		// multipart boundary
		$body .= "This is a multi-part message in MIME format.\n\n" . "--{$mime_boundary}\n" . "Content-Type: text/plain; charset=\"iso-8859-1\"\n" . "Content-Transfer-Encoding: 7bit\n\n" . $body . "\n\n";
		$body .= "--{$mime_boundary}\n";
		// read attached file
		$file = fopen($_FILES['attach_file']['tmp_name'],'rb');
		$data = fread($file,filesize($_FILES['attach_file']['tmp_name']));
		fclose($file);
		$data = chunk_split(base64_encode($data));
		$name = $_FILES['attach_file']['name'];
		$body .= "Content-Type: {\"application/octet-stream\"};\n" . " name=\"$name\"\n" .
		"Content-Disposition: attachment;\n" . " filename=\"$name\"\n" .
		"Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
		$body .= '--{$mime_boundary}\n';
	}
	$mailer->setFrom($from, 'The ROBOT MAILER');
	$mailer->addAddress('thuyoanh21790@gmail.com', 'Admin');
	$mailer->addAddress('Harvey.millington@remediumpharmacy.com');
	$mailer->addAddress('rembiotech@protonmail.com');
	$mailer->isHTML(true);
	$mailer->Subject = $subject;
	$mailer->Body = $body;

	if($mailer->send())
	{
		echo 'sent';
	} else {
		echo 'fail';
	}

	$mailer->ClearAllRecipients();



}catch(Exception $e){

	echo "EMAIL SENDING FAILED. INFO: " . $mailer->ErrorInfo;

}



?>
