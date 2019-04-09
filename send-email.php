<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];
    $my_email = 'changjohn94@gmail.com'
?>

<?php
    $to = $my_email;
    $email_subject = "Contact form submission: $name";
    $email_body = $message;
    $headers = "From: $my_email\n";
    $headers .= "Reply-To: $visitor_email";
    mail($to, $email_subject, $email_body, $headers);
    header("Location: contact.php?mailsend")
?>