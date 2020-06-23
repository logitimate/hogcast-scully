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
  constructor(private episodeService: EpisodeService, private ar: ActivatedRoute) { }

  ngOnInit() {
    const id = this.ar.snapshot.paramMap.get('id');
    this.episodeService.getEpisode(id).subscribe(episode => {
      this.episode = episode;
    })
  }

}
