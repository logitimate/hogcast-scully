import { Component, OnInit, Input } from '@angular/core';
import { Episode } from 'src/app/models/episode';

@Component({
  selector: 'app-latest-episode',
  template: `
  <div class="latest-episode pl-5 d-flex align-items-center justify-content-start">
    <div>
      <h3>Latest Episode</h3>
      <h1 class="mt-4">
        <a [routerLink]="['/episode/', episode.id]" class="text-white">
          {{episode.name}}
          <img src="/assets/play.svg" alt="play media" height="20px;">
        </a>
      </h1>
      <h5 class="description w-50 mt-4">{{episode.description}}</h5>
      <audio [src]="episode.link" controls class="w-50 mt-4">
        <source [src]="episode.link" type="audio/mpeg">
      </audio>
    </div>
  </div>
  `,
  styles: [
    `.latest-episode {
      background-image: url('https://farm4.staticflickr.com/3936/15577316502_786be0f628_k.jpg');
      background-repeat: no-repeat;
      background-position:0 15%;
      height:525px;
      text-shadow: 0 2px 5px rgba(0,0,0,.5);
      color:#FFF;
      background-color:#4a4a4a;
      background-blend-mode: multiply;
      background-size:cover;
    }
    
    .description{
      line-height: 30px;
    }

    audio{
      outline:none;
    }
    `
  ]
})
export class LatestEpisodeComponent {
  @Input() episode: Episode;
  constructor() { }
}
