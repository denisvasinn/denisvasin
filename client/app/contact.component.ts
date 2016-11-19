import { Component } from '@angular/core';

import { Message } from './message';

@Component({
  moduleId: module.id,
  template: `
    <div class="content">
      <form (ngSubmit)="onSubmit()" #messageForm="ngForm">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" id="firstName"
                required
                [(ngModel)]="model.firstName" name="firstName"
                #firstName="ngModel"
                placeholder="First Name" >
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName"
                required
                [(ngModel)]="model.lastName" name="lastName"
                #lastName="ngModel"
                placeholder="Last Name" >
        </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" class="form-control" id="subject"
                required
                [(ngModel)]="model.subject" name="subject"
                #subject="ngModel"
                placeholder="Subject" >
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="text" class="form-control" id="email"
                required
                [(ngModel)]="model.email" name="email"
                #email="ngModel"
                placeholder="E-mail" >
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea type="text" class="form-control" id="message"
                required
                [(ngModel)]="model.message" name="message"
                #message="ngModel"
                placeholder="Message"
                rows="10" >
          </textarea>
        </div>

        <button type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
  `
})

export class ContactComponent {
  public model: Message = new Message();
  private submited: boolean = false;

  onSubmit(){
    this.submited = true;
    console.log(this.model);
  }
 }