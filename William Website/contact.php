
<?php

// configure
$sendTo = 'mrwilliampring@gmail.com';
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

if(isset($_POST["name"], $_POST["surname"], $_POST["email"], $_POST["subject"], $_POST["message"]))
{
	$from = $_POST["email"];
	$emailText = "";
	$emailText .= "First Name: " . $_POST["name"];
	$emailText .= "Last Name: " . $_POST["surname"]; 
	$emailText .= "The message: \n" . $_POST["message"]; 

	var_export($emailText);

	try
	{
		$headers = array('Content-Type: text/html; charset="UTF-8";',
			'From: ' . $from,
			'Reply-To: ' . $from,
			'Return-Path: ' . $from,
		);
		mail($sendTo, $subject, $emailText, implode("\n", $headers));

		$responseArray = array('type' => 'success', 'message' => $okMessage);
	}
	catch (\Exception $e)
	{
		$responseArray = array('type' => 'danger', 'message' => $errorMessage);
	}

	if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
		$encoded = json_encode($responseArray);
		echo("Good");

		header('Content-Type: application/json');

		echo $encoded;
	}
	else {
				echo("Good1");

		echo $responseArray['message'];
	}
}


?>