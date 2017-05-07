import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { routerModule } from './app.routing';

import { PlaylistsModule } from './playlists/playlists.module';
import { MusicSearchModule } from './music-search/music-search.module';
import { MusicSharedModule } from './music-shared/music-shared.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { PlaylistsService } from './playlists/playlists.service';
import { PlaylistSelectionService } from './music-shared/playlist-selection.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PlaylistsModule,
    MusicSearchModule,
    routerModule,
    MusicSharedModule
  ],
  providers: [
    PlaylistsService,
    PlaylistSelectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
