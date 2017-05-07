import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { MusicSearchService } from './../music-search.service';

@Component({
  selector: 'album-search-form',
  templateUrl: 'album-search-form.component.html',
  styleUrls: []
})
export class AlbumSearchFormComponent implements OnInit {

  private searchForm: FormGroup;

  constructor(private musicSearchService: MusicSearchService,
              private fb: FormBuilder) { 
    this.searchForm = fb.group({
      'query': new FormControl()
    });
  }
  
  ngOnInit() {
  
    this.searchForm.get('query').valueChanges
      .filter(query => query.length >= 3)
      .distinctUntilChanged()
      .debounceTime(400)
      .subscribe(query => {
        this.musicSearchService.search(query);
      });
  }

}
