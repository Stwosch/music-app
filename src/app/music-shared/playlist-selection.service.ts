import { Injectable } from '@angular/core';
import { PlaylistsService } from './../playlists/playlists.service';
import { Subject, Observable } from 'rxjs';
import { Track } from '../domain-model-classes/custom-classes';

@Injectable()
export class PlaylistSelectionService {

  constructor(private playlistsService: PlaylistsService) {

    this.selectedIdStream = new Subject(); 

    this.playlistsService.getPlaylistsStream()
      .subscribe(playlists => {

        if(!playlists[0]) {

          this.selectPlaylist(0);
        }
        
      });
  }

  private selectedId: number;
  private selectedIdStream: Subject<number>;
  
  

  getSelectionStream() {
    return Observable
            .from(this.selectedIdStream)
            .startWith(this.selectedId);
  } 

  selectPlaylist(id: number) {
    this.selectedId = id;
    this.selectedIdStream.next(this.selectedId);
  }

  addTrackToPlaylist(track: Track) {
    this.playlistsService.addTrackToPlaylist(this.selectedId, track);
  }
}
