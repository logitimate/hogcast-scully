import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../episode/episode.service';
import { Episode } from '../models/episode';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  template: `
  <app-latest-episode [episode]="latestEpisode" *ngIf="latestEpisode"></app-latest-episode>
  <div class="p-5">
    <app-episode-list [episodes]="episodes"></app-episode-list>
  </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  episodes: Episode[];
  latestEpisode: Episode;
  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
    this.episodeService.getEpisodes()
      .pipe(
        filter(Boolean)
      )
      .subscribe((episodes:Array<Episode>) => {
        this.episodes = episodes.reverse();
        this.latestEpisode = this.episodes[0];
        this.episodes.shift();
      })
  }
}
