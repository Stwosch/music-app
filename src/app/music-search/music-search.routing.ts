import { RouterModule, Routes } from '@angular/router';
import { MusicSearchComponent } from './music-search.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

const routesConfig:Routes = [
  {path: 'music', component: MusicSearchComponent},
  {path: 'music/album/:id', component: AlbumDetailsComponent}
];

export const routerModule = RouterModule.forChild(routesConfig);