import { Component } from '@angular/core';

import { Message } from './message';

@Component({
  moduleId: module.id,
  template: `
    <div class="content">
      
      <div class="inline contact">
        <h3>Contact</h3>
        <hr>
        <div class="form-group">
          <label for="tel">Call:</label>
          <a id="tel" href="tel:+79788869428">+79788869428</a>
        </div>
        <div class="form-group">
          <label for="ms">Email:</label>
          <a id="ms" href="mailto:denis.vasin@outlook.com">denis.vasin@outlook.com</a>
        </div>
        <div class="form-group">
          <label for="sn">Connect:</label>
          <ul id="sn">
            <li id="vk">
              <a href="https://vk.com/id33770477">VK</a>
            </li>
            <li id="fb">
              <a href="https://www.facebook.com/denis.vasin01">Facebook</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="inline q-message">
        <h3>Quick Message</h3>
        <hr>
        <form (ngSubmit)="onSubmit()" #messageForm="ngForm">
          <div class="form-group">
            <input type="text" class="form-control" id="name"
                  [(ngModel)]="model.name" name="name"
                  #name="ngModel"
                  placeholder="Name" >
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="subject"
                  [(ngModel)]="model.subject" name="subject"
                  #subject="ngModel"
                  placeholder="Subject" >
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="email"
                  [(ngModel)]="model.email" name="email"
                  #email="ngModel"
                  placeholder="E-mail" >
          </div>
          <div class="form-group">
            <textarea type="text" class="form-control" id="message"
                  [(ngModel)]="model.message" name="message"
                  #message="ngModel"
                  placeholder="Message"
                  rows="5" >
            </textarea>
          </div>

          <div>
            <input type="submit" class="btn btn-default" value="Submit">
          </div>
        </form>
      </div>
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