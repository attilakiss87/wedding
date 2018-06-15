import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SongModel } from './app.song.model';

@Injectable({
  providedIn: 'root'
})
export class SongserviceService {

  constructor(private http: HttpClient) { }

  saveSong(song:SongModel) :Observable<any> {
    return this.http.post('/wedding/php/save_record.php', song.toJSON());
  }

  getAllSongs() :Observable<any>{
    return this.http.post('/wedding/php/get_all_items.php', {});
  }

  sendMail(message:string, from:string) :Observable<any> {
    return this.http.post('/wedding/php/send_email.php', {body : message, from:from});
  }

  get(url:string):Observable<any> {
    return this.http.get(url);
  }
}
