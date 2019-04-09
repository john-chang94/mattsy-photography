<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    $my_email = 'changjohn94@gmail.com'
?>

<?php
    $toEmail = $my_email;
    $subject = "Contact form submission: $name";
    $body = $message;

    $headers = "MIME-Version 1.0" ."\r\n";
    $headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";
    
    $headers = "From: $my_email\n";
    $headers .= "Reply-To: $visitor_email";
    mail($toEmail, $subject, $body, $headers);
    header("Location: contact.php?mailsend")
?>