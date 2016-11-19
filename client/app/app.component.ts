import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="nav-bar" (window:scroll)="onScroll($event)" [ngClass]="{scrolled: scrolled}">
    <nav>
        <ul>
            <li class="logo">
              <a href="#/home">
                <h1>DENIS VASIN</h1>
              </a>
            </li>
            <li><a [routerLink]="['home']">Home</a></li>
            <li><a [routerLink]="['about']">About</a></li>
            <li><a [routerLink]="['contact']">Contact</a></li>
        </ul>
      </nav>
  </div>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  private scrolled: number;

  onScroll(event) {
    console.log(event);
    console.log(event.pageY);
    this.scrolled = event.pageY;
  }
 }