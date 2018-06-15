<?php 
class Song {
    public $id;
    public $artist = '';
    public $title = '';
    public $link = '';

    public function getLink() {
        if ($this->{'link'} == '') {
            return 'null';
        } else {
            return '"'.$this->{'link'}.'"';
        }
    }
}
?>