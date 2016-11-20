import { Component } from '@angular/core';

@Component({
  template: `
    <div class="content">
      <div class="main-page">
        <img class="image" src="/images/photo.jpg" alt="Photo">
        <div>
          <p> Ahoy there! My name is Denis. I am 22 years old and i study in V.I. Vernadsky Crimean Federal University. I am really like JavaScript. If you want to see my projects please visit my 
            <a href="https://github.com/denisvasinn">GitHub</a>.
          </p>
          <p> I will be glad to work with team or single customer. Want to work with me?
            Drop me a line using the form or connect through social media
            <a href="/#/contact">here!</a>
          </p>
        </div>
      </div>
    </div>
    <footer>
      <p>2016 All rights reserved.</p>
    </footer>
  `
})

export class HomeComponent { }