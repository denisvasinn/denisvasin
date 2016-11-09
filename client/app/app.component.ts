import { Component } from '@angular/core';

import { NavigationComponent } from './navigation.component';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hello World!</h1>
  <my-nav></my-nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent { }