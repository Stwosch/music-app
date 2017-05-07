import { RouterModule, Routes } from '@angular/router';
import { PlaylistsComponent } from './playlists.component';
import { PlaylistsDetailComponent } from './playlists-detail/playlists-detail.component';
import { PlaylistFormComponent } from './playlist-form/playlist-form.component';

const routesConfig:Routes = [
  {path: 'playlist', component: PlaylistsComponent, children: [
    {path: '', component: PlaylistsDetailComponent},
    {path: 'new', component: PlaylistFormComponent},
    {path: ':id', component: PlaylistsDetailComponent},
    {path: ':id/edit', component: PlaylistFormComponent}
  ]}
];

export const routerModule = RouterModule.forChild(routesConfig);