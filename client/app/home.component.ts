import { Component } from '@angular/core';

@Component({
  template: `
    <div class="content">
      <div class="photo-container">
        <img class="photo" src="/images/photo.jpg" alt="Photo">
      </div>
      <div class="grt">
        <p> Ahoy there! My name is Denis. I am 22 years old and i am student. I am really like JavaScript.
         If you want to see my projects please visit my 
          <a href="https://github.com/denisvasinn">GitHub</a>.
        </p>
        <p> I will be glad to work with team or single customer. Want to work with me?
          Drop me a line using the form or connect through social media
          <a href="/#/contact">here!</a>
        </p>
      </div>
    </div>
  `
})

export class HomeComponent { }