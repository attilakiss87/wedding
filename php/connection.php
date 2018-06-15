<?php
$host = '127.0.0.1';
// $username = 'root';
// $password = 'admin';
$username = 'wedding';
$password = 'wedding123';
$connection = mysqli_connect($host, $username, $password) or die ('Nem sikerült a csatlakozás');
mysqli_query($connection, "SET NAMES UTF8");
mysqli_query($connection, "set character set UTF8");
mysqli_query($connection, "set collation_connection='utf8_unicode_ci'");
?>