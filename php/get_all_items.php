<?php
header("Content-Type: application/json; charset=UTF-8");
include 'connection.php';
include 'result.php';
include 'song.php';
include 'get_all.php';
$res = new Result;
$res->{'items'} = getAll($connection);
mysqli_close($connection);
echo json_encode($res);
?>