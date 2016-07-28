import { provideRouter, RouterConfig }  from '@angular/router';

import { MovieRoutes } from './movies/movie.routes';

export const routes: RouterConfig = [
  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  ...MovieRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
