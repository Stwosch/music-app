import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from './playlists.service';

@Component({
  selector: 'playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  constructor(private playlistsService: PlaylistsService) { }

  ngOnInit() {
  }

}
