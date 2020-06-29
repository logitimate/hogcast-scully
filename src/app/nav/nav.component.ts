import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="assets/logo.png" alt="The Hogcast Logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <a class="nav-link" routerLink="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://podcasts.apple.com/us/podcast/the-hogcast/id928260251?mt=2">Subscribe</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://twitter.com/TheHogCast">Twitter</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://www.facebook.com/thehogcast">Facebook</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="photos">Photos</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
    `.navbar-brand img{
      width:250px;
    }`
  ]
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
