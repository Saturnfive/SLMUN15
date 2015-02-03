<?php
$name = $_POST['contact-name'];
$email = $_POST['contact-email'];
$organi = $_POST['contact-organi'];
$message = $_POST['message'];
$formcontent=" From: $name \n \n Organisation: $organi Message: $message";
$recipient = "dsenanayaka1@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='form.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>
