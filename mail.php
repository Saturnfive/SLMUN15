<?php
$name = $_POST['contact-name'];
$email = $_POST['contact-email'];
$organi = $_POST['contact-organi'];
$message = $_POST['message'];
$formcontent=" From: $name \n \n Organisation: $organi \n Message: $message";
$recipient = "dsenanayaka1@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "<script> confirm(); </script>";

?>
