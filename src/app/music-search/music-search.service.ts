import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Album, Track } from '../domain-model-classes/custom-classes';


@Injectable()
export class MusicSearchService {

  constructor(private http: Http) {

    this.albumsStream = new Subject();
  }

  private albums: Album[];
  private albumsStream: Subject<Album[]>;

  getAlbumsStream() {
    return Observable
      .from(this.albumsStream) 
      .startWith(this.albums);
  }

  getTracksFromServer(id: string) {
    const url: string = `https://api.spotify.com/v1/albums/${id}`;

    return this.http.get(url)
      .map((response: Response) => { 
        
        const data = response.json().tracks.items;
        return data.map(track => new Track(track.id, track.name, track.artists[0].name, track.preview_url));
      });
  }

  getAlbumFromServer(id: string) {
    
      const url: string = `https://api.spotify.com/v1/albums/${id}`;

      return this.http.get(url)
        .map((response: Response) => {

          const album = response.json();
          return new Album(album.id, album.name, album.images[0].url);
        });
  }
   
   search(query: FormControl) {

    const url: string = `https://api.spotify.com/v1/search?type=album&market=PL&query=${query}`;

    this.http.get(url)
      .map((response: Response) => {

        const data = response.json().albums.items;
        return data.map(album => new Album(album.id, album.name, album.images[0].url));
      })
      .do(albums => this.albums = albums)
      .subscribe(() => {

        this.albumsStream.next(this.albums);
      });
   }
}
