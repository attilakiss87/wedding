<?php
function getAll($connection) {
  $result = mysqli_query($connection, 'SELECT * from wedding.muzik order by artist asc');
  $count = mysqli_fetch_assoc(mysqli_query($connection, 'SELECT count(*) as total from wedding.muzik'));
  $rows = array();
  if ($count['total'] > 0) {
        while($r = mysqli_fetch_assoc($result)) {
          $song = new Song;
          $song->{'id'} = $r['id'];
          $song->{'artist'} = $r['artist'];
          $song->{'title'} = $r['title'];
          $song->{'link'} = $r['link'];
          $rows['items'][] = $song;
        }
        // mysqli_close($connection);
  }
  return $rows['items'];
}
?>