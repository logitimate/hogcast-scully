import { Component, OnInit } from '@angular/core';
import { EpisodeService } from './episode.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Episode } from '../models/episode';

@Component({
  selector: 'app-episode',
  template: `
  <div class="container mt-5" *ngIf="episode">
    <button class="btn btn-primary" (click)="testHydration()">Test Hydration</button>
    <h1>{{episode.name}}</h1>
    <p>{{episode.description}}</p>
    <img src="/assets/hogcast-team.jpg" alt="Chuck,Logan,Colby" height="400px;" class="d-block m-auto">
    <audio [src]="episode.link" controls class="w-100 mt-4">
        <source [src]="episode.link" type="audio/mpeg">
    </audio> 
  </div>
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


  testHydration() {
    console.log('testing angular hydration');
  }

}
