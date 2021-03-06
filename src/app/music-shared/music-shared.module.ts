import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlaylistSelectorComponent } from './playlist-selector/playlist-selector.component';
import { TrackListComponent } from './track-list/track-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PlaylistSelectorComponent,
    TrackListComponent
  ],
  providers: [
  ],
  exports: [
    PlaylistSelectorComponent,
    TrackListComponent
  ]
}) 
export class MusicSharedModule { }
