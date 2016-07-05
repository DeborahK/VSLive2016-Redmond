import { provideRouter, RouterConfig }  from '@angular/router';

import { MovieRoutes } from './movies/movie.routes';

export const routes: RouterConfig = [
  ...MovieRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
