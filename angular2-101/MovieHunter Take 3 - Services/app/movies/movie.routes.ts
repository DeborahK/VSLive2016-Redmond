import { RouterConfig } from '@angular/router';

import { MovieListComponent } from './movie-list.component';

export const MovieRoutes: RouterConfig = [
  { path: 'movies', component: MovieListComponent }
];
