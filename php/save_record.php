<?php
header("Content-Type: application/json; charset=UTF-8");
include 'connection.php';
include 'result.php';
include 'song.php';
include 'get_all.php';
include 'send_insert_notification.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$isUpdate = false;
$song = new Song;
if (property_exists($request, 'id')) {
  $song->{'id'} = $request->id;
  $isUpdate = true;
}
$song->{'title'} = $request->title;
$song->{'artist'} = $request->artist;
if (property_exists($request, 'link')) {
  $song->{'link'} = $request->link;
}

$res = new Result;
if ($isUpdate) {
  $update = 'update wedding.muzik set link = '.$song->getLink().' where id = '.$song->{'id'}.';';
  mysqli_query($connection, $update);
  $res->{'items'} = getAll($connection);
  sendNotify($song->{'title'}, $song->{'artist'});
} else {
  $validatorSQL = 'select count(*) as total from wedding.muzik where upper(title) like upper(\''
    .$song->{'title'}.'\') and upper(artist) like upper(\''.$song->{'artist'}.'\');';
  $validarotResult = mysqli_query($connection, $validatorSQL);
  if ($validarotResult != false) {
    $valRes = mysqli_fetch_assoc($validarotResult);
    if ($valRes['total'] > 0) {
      $res->{'existed'} = true;
    } else {
    
      $insert = 'insert into wedding.muzik (title, artist, link) values ("'.
      $song->{'title'}.'","'.
      $song->{'artist'}.'",'.
      $song->getLink().')';
      
      mysqli_query($connection, $insert);
      
      $res->{'items'} = getAll($connection);
      sendNotify($song->{'title'}, $song->{'artist'});
    }
  }
}
mysqli_close($connection);
echo json_encode($res);

?>