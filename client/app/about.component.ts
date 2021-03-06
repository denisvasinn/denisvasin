import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="content resume">
    <div>
      <h3>Web Developer</h3>
      <hr>
      <ul>
        <li><p>Junior Web developer able to build a Web presence from the ground up -- from concept, navigation, layout and programming to UX and SEO</p></li>
        <li><p>Skilled at writing well-designed, testable and efficient code using current best practices in Web development</p></li>
        <li><p>Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools</p></li>
      </ul>
    </div>
    <div>
      <h3>Technical Toolbox</h3>
      <hr>
      <p>JavaScript, jQuery, CSS, PHP, HTML, Angular 2, Bootstrap, C#, .Net, MySQL, MongoDB, GitHub, Gulp, REST</p>
    </div>
    <div>
      <h3>Education</h3>
      <hr>
      <p>V.I. Vernadsky Crimean Federal University. Physics and Technology Institute 2016-2018</p>
    </div>
  </div>
  `
})

export class AboutComponent { }