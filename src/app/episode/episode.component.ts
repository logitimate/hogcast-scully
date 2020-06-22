import { Component, OnInit } from '@angular/core';
import { EpisodeService, Episode } from './episode.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-episode',
  template: `
    <h1>This is an episode</h1>
    <pre>{{episode|json}}</pre>
  `,
  styles: []
})
export class EpisodeComponent implements OnInit {
  episode: Episode;
  constructor(private episodeService: EpisodeService, private ar: ActivatedRouteSnapshot) { }

  ngOnInit() {
    this.episodeService.getEpisode(this.ar.paramMap.get('id')).subscribe(episode => {
      this.episode = episode;
    })
  }

}
