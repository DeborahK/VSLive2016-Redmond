import { RouterConfig } from '@angular/router';

import { MovieListComponent } from './movie-list.component';
import { MovieDetailComponent } from './movie-detail.component';

export const MovieRoutes: RouterConfig = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailComponent }
];
