import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MusicSharedModule } from '../music-shared/music-shared.module';

import { PlaylistsComponent } from './playlists.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { PlaylistFormComponent } from './playlist-form/playlist-form.component';
import { PlaylistsListComponent } from './playlists-list/playlists-list.component';
import { PlaylistsDetailComponent } from './playlists-detail/playlists-detail.component';

import { routerModule } from './playlists.routing';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routerModule,
    MusicSharedModule
  ],
  declarations: [
    PlaylistsComponent,
    ContentCardComponent,
    PlaylistFormComponent,
    PlaylistsListComponent,
    PlaylistsDetailComponent
  ],
  exports: [
    PlaylistsComponent
  ],
  providers: [
  ]
})
export class PlaylistsModule { }
