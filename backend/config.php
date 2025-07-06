<?php
$serverName = "localhost"; // या .\SQLEXPRESS
$connectionOptions = array(
    "Database" => "VANSH_SERVICE_HUB",
    "Uid" => "sa",          // आपका SQL Server यूज़र
    "PWD" => "your_password", // आपका SQL Server पासवर्ड
    "CharacterSet" => "UTF-8"
);

$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    die(print_r(sqlsrv_errors(), true));
}
?>
