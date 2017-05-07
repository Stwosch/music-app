import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-card',
  templateUrl: './content-card.component.html',
  styleUrls: [],
})
export class ContentCardComponent implements OnInit {

  @Input() title: string;
  @Input('content') text: string;

  constructor() { }

  ngOnInit() {
  }

}
