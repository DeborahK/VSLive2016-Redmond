import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MovieService } from './movies/movie.service';

@Component({
    selector: 'mh-app',
    template: `
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand">{{pageTitle}}</a>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/movies']">Movie List</a></li>
                </ul>
            </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HTTP_PROVIDERS,
        MovieService
    ]
})
export class AppComponent {
    pageTitle: string = 'InStep Movie Hunter';
}
