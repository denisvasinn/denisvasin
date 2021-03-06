import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from './message';
import { MessageService } from './message.service';

@Component({
  moduleId: module.id,
  template: `
    <div class="content">
      
      <div class="container contact">
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

      <div class="container q-message">
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
            <textarea type="text" class="form-control" id="data"
                  [(ngModel)]="model.data" name="data"
                  #data="ngModel"
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
  private messageService: MessageService;

  constructor(@Inject(MessageService) messageService){
    this.messageService = messageService;
   }

  onSubmit(){
    this.submited = true;
    this.messageService.send(this.model)
    .subscribe(res => alert('successfully sent'), (err) => console.log(err));
  }
}