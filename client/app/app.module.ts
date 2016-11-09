import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation.component';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {ContactsComponent} from './contacts.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ContactsComponent
    ],
  bootstrap: [AppComponent]
  ,providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})

export class AppModule { }