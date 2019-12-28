<?php
$your_email = 'YOUR@EMAIL.here';

if (isset($_POST) && !empty($_POST)) { //Checks if action value exists

  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['massage'];
  $headers = 'From: <'.$email.'>' . "\r\n";

  if(@mail($your_email, $subject, $message, $headers))
  {

    $result = array("status" => "1","msg" => "Thanks for reaching out! I will get back to you as soon as possible.");
    echo json_encode($result);

  }else{

    $result = array("status" => "0","msg" => "Somthing went wrong. Please try later.");
    echo json_encode($result);

  }

}

?>
