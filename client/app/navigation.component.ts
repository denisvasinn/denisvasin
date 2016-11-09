import { Component } from '@angular/core';

@Component(
   {
       selector: `my-nav`,
       template: `
       <div>
            <nav>
                <a>Navigation:</a>
                <ul>
                    <li><a [routerLink]="['home']">Home</a></li>
                    <li><a [routerLink]="['about']">About</a></li>
                    <li><a [routerLink]="['contacts']">Contacts</a></li>
                </ul>
            </nav>
        </div>
       `
   }
)

export class NavigationComponent{}