import { Component, OnInit, Injectable } from '@angular/core';
import { SongserviceService } from '../songservice.service';
import { SongModel } from '../app.song.model';
import { NgxLoadingSpinnerService } from 'ngx-loading-spinner-fork';

import getArtistTitle from '../../../node_modules/get-artist-title/lib/index.js';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../../../node_modules/font-awesome/css/font-awesome.min.css']
})

export class MainpageComponent implements OnInit {


  menuId: string;
  songs = [];
  song:SongModel = new SongModel();
  showForm:boolean = false;
  linkAdd:boolean = false;
  buttonText:string = "Új dal hozzáadása";
  message:string;
  messageFrom:string;

  constructor(private songService: SongserviceService, private spinner: NgxLoadingSpinnerService) { }

  ngOnInit() {
    this.menuId = 'home';
    this.songs = [];
  }

  onMenuClick(event) {
    this.menuId = event.target.id;
    let menus = document.querySelectorAll('li.nav-item a');
    for (let i = 0; i < menus.length; i++) {
      if (menus[i] != event.target) {
        menus[i].classList.remove('active');
      } else {
        menus[i].classList.add('active');
      }
    }
    if (this.menuId == 'playlist') {
      this.spinner.show();
      this.songService.getAllSongs().subscribe(
        result => this.handleResult(result),
        error => this.handleError(error)
      );
    }
  }

  onNewSongClick() {
    this.song = new SongModel();
    this.showForm = true;
    this.setButtonText();
  }

  onCancelClick() {
    this.showForm = false;
    this.linkAdd = false;
    this.setButtonText();
  }

  setButtonText() {
    this.buttonText = this.showForm ? "Mégsem" : "Új dal hozzáadása";
  }

  onSaveClick() {
    this.spinner.show();
    this.songService.saveSong(this.song).subscribe(
      result => this.handleResult(result),
      error => this.handleError(error)
    );
    this.showForm = false;
    this.linkAdd = false;
    this.setButtonText();
  }

  onAddLinkClick(song:SongModel) {
    if (!this.showForm) {
      this.onNewSongClick();
    }
    this.song = new SongModel(song.toJSON());
    this.linkAdd = true;
  }

  handleResult(result) {
    if (result.existed == true) {
      alert('Ez a melódia már benne van a listában, nézd meg jobban kérlek.');
    } else {
      this.songs = [];
      if (result.items && result.items.length > 0) {
        for (let i = 0; i < result.items.length; i++) {
          this.songs.push(new SongModel(result.items[i]));
        }
      }
    }
    this.song = new SongModel();
    // this.spinner.hide();
  }

  onLinkChanged() {
    this.spinner.show();
    let link = this.song.link;
    let url = 'https://www.googleapis.com/youtube/v3/videos/?part=snippet&key=AIzaSyCZiAajic0A5ii0rZmJX47mTGvD9CoJfn4&id=';
    let id = link.replace(/(.*v=)([^&]*)(&.*)?$/, '$2');
    if (id) {
      this.songService.get(url + id).subscribe(result => {
        if (result && result.items && result.items.length > 0 && result.items[0] && result.items[0].snippet && result.items[0].snippet.title) {
          let title = result.items[0].snippet.title;
          try {
            let info = getArtistTitle(title);
            if (!this.song.artist) {
              this.song.artist = info[0];
            }
            if (!this.song.title) {
              this.song.title = info[1];
            }
          } catch (err) {
            console.log(err);
          }
        }
        this.spinner.hide();
      }, err => {console.log(err);this.spinner.hide();});
    }

  }

  handleError(error) {
    if (error) {
      if (error.error && error.error.text) {
        console.log(error.error.text);
      } else {
        console.log(error);

      }
    }
    // this.spinner.hide();
  }
  onSendMessage() {
    this.spinner.show();
    this.songService.sendMail(this.message, this.messageFrom).subscribe(res => {
      if (res.success == true) {
        alert('Az üzenet sikeresen elküldve');
        this.message = '';
        this.messageFrom = '';
      } else {
        alert('Hiba történt');
      }
      this.spinner.hide();
    }, err => {console.log(err);this.spinner.hide();});
  }
}
