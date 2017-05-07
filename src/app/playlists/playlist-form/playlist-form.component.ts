import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService} from './../playlists.service';
import { Playlist } from '../../domain-model-classes/custom-classes';

@Component({
  selector: 'playlist-form',
  templateUrl: './playlist-form.component.html',
  styleUrls: []
})
export class PlaylistFormComponent implements OnInit {

  playlist: Playlist;

  savePlaylist(validate: boolean, playlist: Playlist) {

    if(!validate) {
      return;
    }

   this.playlistsService.savePlaylist(playlist);
   this.router.navigate(['playlist', playlist.id]);
  }

  removePlaylist() {

    this.playlistsService.removePlaylist(this.playlist.id);

    this.router.navigate(['playlist']);
  }

  constructor(private playlistsService: PlaylistsService,
              private activeRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {

    this.activeRoute.params.subscribe(params => {
      const id: number = parseInt(params['id']);

      if(id) {
        const playlist: Playlist = this.playlistsService.getPlaylist(id);
        this.playlist = Object.assign({}, playlist);

      } else {
        
        this.playlist = this.playlistsService.createNewPlaylist();
      }
    });

  }

}
