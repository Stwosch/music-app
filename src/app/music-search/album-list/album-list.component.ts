import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from './../music-search.service';
import { Observable } from 'rxjs';
import { Album } from '../../domain-model-classes/custom-classes';

@Component({
  selector: 'album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  constructor(private musicSearchService: MusicSearchService) { }

  private albums: Album[];

  ngOnInit() {
    this.musicSearchService.getAlbumsStream()
      .subscribe(albums => this.albums = albums);
  }

}
