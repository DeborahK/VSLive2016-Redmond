import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'mh-app',
    template: `
    <div class="container">
        <h1>{{pageTitle}}</h1>
        <router-outlet></router-outlet>
     </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    pageTitle: string = 'InStep Movie Hunter';
}
