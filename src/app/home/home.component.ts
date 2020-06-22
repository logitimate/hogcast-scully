import { Component, OnInit } from '@angular/core';
import { EpisodeService, Episode } from '../episode/episode.service';

@Component({
  selector: 'app-home',
  template: `
    <div *ngFor="let episode of episodes" class="mb-2">
      {{episode.name}}
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  episodes: Episode[];
  constructor(private episodeService: EpisodeService) { }

  ngOnInit() {
    this.episodeService.getEpisodes().subscribe(episodes => {
      this.episodes = episodes;
    })
  }
}
