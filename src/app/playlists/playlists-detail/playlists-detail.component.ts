import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PlaylistsService } from './../playlists.service';
import { Playlist } from '../../domain-model-classes/custom-classes';

@Component({
  selector: 'playlists-detail',
  templateUrl: './playlists-detail.component.html',
  styleUrls: []
})
export class PlaylistsDetailComponent implements OnInit {

  playlist: Playlist;

  constructor(private playlistsService: PlaylistsService,
              private activeRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      const id = parseInt(params['id']);

      if(id) {
        this.playlist = this.playlistsService.getPlaylist(id);
      }
    });
  }

}
