import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="content">
    <div class="resume">
      <h2>DENIS VASIN</h2>
      <br>
      <hr>
      <h3>Web Developer</h3>
      <hr>
      <br>
      <ul>
        <li>Junior Web developer able to build a Web presence from the ground up -- from concept, navigation, layout and programming to UX and SEO</li>
        <li>Skilled at writing well-designed, testable and efficient code using current best practices in Web development</li>
        <li>Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools</li>
      </ul>
      <br>
      <hr>
      <h3>Technical Toolbox</h3>
      <hr>
      <p>JavaScript, jQuery, CSS, PHP, HTML, Angular 2, Bootstrap, .Net, MySQL, MongoDB, GitHub, Gulp, REST</p>
      <br>
      <hr>
      <h3>Education</h3>
      <hr>
      <p>V.I. Vernadsky Crimean Federal University. Physics and Technology Institute 2014-2017</p>
    </div>
  </div>
  <footer>
    <p>2016 All rights reserved.</p>
  </footer>
  `
})

export class AboutComponent { }