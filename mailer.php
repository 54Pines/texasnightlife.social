<?php 
if(isset($_POST['submit'])){
    $to = "rob@texasnightlife.social"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $fname = $_POST['inputFname'];
    $lname = $_POST['inputLname'];
    $phone = $_POST['phone'];
    $dob = $_POST['dob'];
    $date = $_POST['date'];
    $group = $_POST['groupNumber'];
    $package = $_POST['package'];
    $text = $_POST['text'];
    $message = "Someone has sent you a message using your contact form: " + "Name: " + $fname + " " + $lname + " " + "Email: " + $from + " " + "Date of Birth: " + $dob + " " + "Number in Group: " + $dob + "Package: " + $package + " " + $text + ".";
    mail($to, $subject, $message);
    header("Location: thank_you.php");

    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>