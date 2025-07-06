<?php
session_start();
if (!isset($_SESSION["user"])) {
    header("Location: login.html");
    exit;
}
$user = $_SESSION["user"];
?>
<!DOCTYPE html>
<html>
<head><title>Dashboard</title></head>
<body>
    <h2>Welcome, <?php echo $user["name"]; ?>!</h2>
    <p>User Type: <?php echo $user["user_type"]; ?></p>
    <a href="logout.php">Logout</a>
</body>
</html>
