import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MovieService } from './movies/movie.service';

@Component({
    selector: 'mh-app',
    template: `
    <div class="container">
        <h1>{{pageTitle}}</h1>
        <router-outlet></router-outlet>
     </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [MovieService]
})
export class AppComponent {
    pageTitle: string = 'InStep Movie Hunter';
}
