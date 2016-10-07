//Imports
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
       <h1>{{title}}</h1>
       <input>{{}}</input>
    `,
    styles: [`

    `]
})

export class AppComponent{
    title = 'Welcome to OmniDesk';
    specialKey = 'ID';
}