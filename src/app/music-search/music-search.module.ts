import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MusicSharedModule } from '../music-shared/music-shared.module';
import { routerModule } from './music-search.routing';

import { MusicSearchService } from './music-search.service';

import { MusicSearchComponent } from './music-search.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumSearchFormComponent } from './album-search-form/album-search-form.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routerModule,
    MusicSharedModule
  ],
  declarations: [
    MusicSearchComponent, 
    AlbumCardComponent, 
    AlbumListComponent, 
    AlbumSearchFormComponent, 
    AlbumDetailsComponent
  ],
  exports: [
    MusicSearchComponent
  ], 
  providers: [
    MusicSearchService
  ]
})
export class MusicSearchModule { }
