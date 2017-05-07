import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../domain-model-classes/custom-classes';

@Component({
  selector: 'album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {

  @Input('album')
  set setCard(album: Album) {
    this.name = album.name;
    this.image = album.image;
  }

  private name: string;
  private image: string;

  constructor() { }

  ngOnInit() {
  }

}
