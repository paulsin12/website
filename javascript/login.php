<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = $_POST["uname"];
    $password = $_POST["psw"];

   
    $validUsername = "user@example.com";
    $validPassword = "password123";

    
    if ($username === $validUsername && $password === $validPassword) {
        
        header("Location: welcome.php");
        exit();
    } else {
       
        echo "Invalid username or password. Please try again.";
    }
}
?>