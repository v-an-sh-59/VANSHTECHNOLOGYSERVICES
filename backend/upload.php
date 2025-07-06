<?php
session_start();
include("config.php");

if (!isset($_SESSION["user"])) {
    die("Login required");
}

$user = $_SESSION["user"];
$uploader_id = $user["id"];

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["file"])) {
    $file = $_FILES["file"];
    $filename = basename($file["name"]);
    $targetDir = "../uploads/";
    $targetPath = $targetDir . $filename;

    $fileType = strtolower(pathinfo($targetPath, PATHINFO_EXTENSION));
    $allowed = array("pdf", "ppt", "pptx", "docx");

    if (in_array($fileType, $allowed)) {
        if (move_uploaded_file($file["tmp_name"], $targetPath)) {
            $sql = "INSERT INTO uploads (user_id, filename, path, uploaded_at) VALUES (?, ?, ?, GETDATE())";
            $params = array($uploader_id, $filename, $targetPath);
            $stmt = sqlsrv_query($conn, $sql, $params);

            if ($stmt) {
                echo "✅ File uploaded successfully!";
            } else {
                echo "❌ DB Error: " . print_r(sqlsrv_errors(), true);
            }
        } else {
            echo "❌ Failed to move file!";
        }
    } else {
        echo "❌ Only PDF, PPT, PPTX, DOCX allowed!";
    }
}
?>
