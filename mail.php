<?php $name = $_POST['contact-name'];
$email = $_POST['contact-email'];
$message = $_POST['contact-message'];
$formcontent="From: $name \n Message: $message";
$recipient = "dsenanayaka1@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>
