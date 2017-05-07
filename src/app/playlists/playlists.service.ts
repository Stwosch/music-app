import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { Playlist, Track } from '../domain-model-classes/custom-classes';

@Injectable()
export class PlaylistsService {

  constructor(private http: Http) { 

    this.playlists = [];
    this.playlistsStream = new Subject();
    this.serverUrl = 'http://localhost:3000/playlists/';
  }

  serverUrl: string;
  playlists: Playlist[];

  playlistsStream: Subject<Playlist[]>;

  addTrackToPlaylist(playlistId: number, track: Track) {

    // 1. Find the playlist
    const playlist = this.playlists.find(playlist => playlist.id === playlistId);
    // 2. Check if track is in playlist
    const isTrackInPlaylist = playlist.tracks.find((song: any)  => song.id == track.id);

    if(!isTrackInPlaylist) {

      // 3. Add track to found playlist
      playlist.tracks.push(track);
      // 4. Save data on server 
      this.savePlaylist(playlist);
    } else {
      console.log('Ten track jest juz na playliscie');
    }
    
  }

  removeTrackFromPlaylist(trackId, playlistId) {

    // 1. Find the track
    const playlist = this.playlists.find(playlist => playlist.id == playlistId);
    // 2. Remove track
    if(playlist) {

      playlist.tracks.splice(trackId, 1);

      // 3. Remove from server
     this.savePlaylist(playlist);
    }
  }

  getPlaylistsStream() {

    if(!this.playlists.length) {
      this.getDataFromServer();
    }

    return Observable
      .from(this.playlistsStream) 
      .startWith(this.playlists);
  }

  getDataFromServer() {

    this.http.get(this.serverUrl)
      .map((response: Response) => response.json())
      .subscribe(playlists => {
        this.playlists = playlists;
        this.playlistsStream.next(this.playlists);
      });
  }


  createNewPlaylist(): Playlist {

    return new Playlist('', [], '#0000FF', false);
  }

  getPlaylist(id: number) {

    const index = this.playlists.findIndex((el: Playlist) =>  el.id === id);
    return this.playlists[index];
  }

  savePlaylist(playlist: Playlist) {

    if(playlist.id) {

      const index = this.playlists.findIndex((el: Playlist) =>  el.id === playlist.id);
      this.playlists.splice(index, 1, playlist);

      this.http.put(this.serverUrl + playlist.id, playlist).subscribe();
    } else {
      playlist.id = Date.now();
      this.playlists.push(playlist);

      this.http.post(this.serverUrl, playlist).subscribe();
    }
  }

  removePlaylist(id: number) {

    // 1. Find proper playlist
    const index = this.playlists.findIndex((el: Playlist) =>  el.id === id);

    // 2. Remove playlist locally
    this.playlists.splice(index, 1);

    this.playlistsStream.next(this.playlists);

    // 3. Remove from server
    this.http.delete(this.serverUrl + id).subscribe();
  }

}
