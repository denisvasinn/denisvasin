import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <header (window:scroll)="onScroll($event)" [ngClass]="{scrolled: scrolled}">
    <nav class="nav-bar">
      <ul>
        <li class="logo-item">
          <a class="logo" href="#/home">
            <h1>DENIS VASIN</h1>
          </a>
        </li>
        <li class="nav-item"><a [routerLink]="['home']">Home</a></li>
        <li class="nav-item"><a [routerLink]="['about']">About</a></li>
        <li class="nav-item"><a [routerLink]="['contact']">Contact</a></li>
      </ul>
    </nav>
  </header>
  <article>
    <router-outlet></router-outlet>
  </article>
  <footer>
    <p>2016 All rights reserved.</p>
  </footer>
  `
})

export class AppComponent {
  private scrolled: number;

  onScroll(event) {
    this.scrolled = event.pageY;
  }
}