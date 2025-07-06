<?php
include("config.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT);
    $user_type = $_POST["user_type"];

    $sql = "INSERT INTO users (name, email, password, user_type) VALUES (?, ?, ?, ?)";
    $params = array($name, $email, $password, $user_type);

    $stmt = sqlsrv_query($conn, $sql, $params);

    if ($stmt) {
        echo "Registration successful!";
    } else {
        echo "Error: " . print_r(sqlsrv_errors(), true);
    }
}
?>
