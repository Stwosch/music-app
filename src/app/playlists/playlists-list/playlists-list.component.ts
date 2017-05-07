import { Component, OnInit, Input } from '@angular/core';
import { PlaylistsService } from './../playlists.service';
import { Response } from '@angular/http';
import { Playlist } from '../../domain-model-classes/custom-classes';

@Component({
  selector: 'playlists-list',
  templateUrl: './playlists-list.component.html',
  styleUrls: ['./playlists-list.component.css']
})

export class PlaylistsListComponent implements OnInit {

  playlists: Playlist[];
  selected: Playlist;
  
  constructor(private playlistsService: PlaylistsService) { }

  ngOnInit() {

    this.playlistsService.getPlaylistsStream()
      .subscribe((playlists: Playlist[]) => this.playlists = playlists);
  }

}
