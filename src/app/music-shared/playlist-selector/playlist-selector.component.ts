import { Component, OnInit } from '@angular/core';
import { PlaylistSelectionService } from './../playlist-selection.service';
import { PlaylistsService } from './../../playlists/playlists.service';
import { Playlist } from '../../domain-model-classes/custom-classes';

@Component({
  selector: 'playlist-selector',
  templateUrl: './playlist-selector.component.html',
  styleUrls: []
})
export class PlaylistSelectorComponent implements OnInit {

  constructor(private playlistSelectionService: PlaylistSelectionService,
              private playlistsService: PlaylistsService) { }

  private selectedId: number;
  private playlists: Playlist[];

  setSelected(id) {
    
    this.playlistSelectionService.selectPlaylist(parseInt(id));
  }

  ngOnInit() {
    this.playlistSelectionService.getSelectionStream()
      .subscribe(id => this.selectedId = id);

    this.playlistsService.getPlaylistsStream()
      .subscribe(playlists => this.playlists = playlists);
  }

}
