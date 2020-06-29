import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Episode } from 'src/app/models/episode';

@Component({
  selector: 'app-episode-list',
  template: `
    <a [routerLink]="['/episode/', episode.id]" *ngFor="let episode of episodes">
      <h2>{{episode.name}}</h2>
      <small class="text-muted">{{episode.publishDate | date: 'fullDate'}}</small>
      <p class="invisible">{{episode.keywords}}</p>
    </a>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeListComponent {
  @Input() episodes: Array<Episode>;
  constructor() { }
}
