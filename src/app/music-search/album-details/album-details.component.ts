import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './../music-search.service';
import { ActivatedRoute } from '@angular/router';
import { Track, Album } from '../../domain-model-classes/custom-classes';

@Component({
  selector: 'album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

  constructor(private musicSearchService: MusicSearchService,
              private activeRoute: ActivatedRoute) { }

  private tracks: Track[];
  private album: Album;

  ngOnInit() {

    const id: string = this.activeRoute.snapshot.params['id'];

    this.musicSearchService.getTracksFromServer(id)
      .subscribe(tracks => this.tracks = tracks);

    this.musicSearchService.getAlbumFromServer(id)
      .subscribe(album => this.album = album);
  }

}
