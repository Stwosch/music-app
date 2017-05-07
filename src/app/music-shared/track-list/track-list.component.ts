import { Component, OnInit, Input } from '@angular/core';
import { PlaylistSelectionService } from './../playlist-selection.service';
import { PlaylistsService} from '../../playlists/playlists.service';
import { Playlist, Track } from '../../domain-model-classes/custom-classes';
import { Observable } from 'rxjs';

@Component({
  selector: 'track-list',
  templateUrl: './track-list.component.html',
  styleUrls: []
})
export class TrackListComponent implements OnInit {

  @Input() playlist: Playlist;
  @Input() playlistControls: Object;
  @Input() tracks: Track[];

  private selectedPlaylist: Observable<number>;

  constructor(private playlistSelectionService: PlaylistSelectionService,
              private playlistsService: PlaylistsService) { }

  play($event, audio, track) {

    if(audio.src !== track.musicUrl) {
      audio.src = track.musicUrl;
      audio.play();
    } else if(audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  addTrackToPlaylist(track) {
    this.playlistSelectionService.addTrackToPlaylist(track);
  }

  removeTrackFromPlaylist(trackId) {
    this.playlistsService.removeTrackFromPlaylist(trackId, this.playlist.id);
  }
  

  ngOnInit() {

    this.selectedPlaylist = this.playlistSelectionService.getSelectionStream();
  }

}
