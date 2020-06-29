import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodeModule } from './episode/episode.module';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HomeComponent } from './home/home.component';
import { LatestEpisodeComponent } from './home/latest-episode/latest-episode.component';
import { NavComponent } from './nav/nav.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { EpisodeListComponent } from './home/episode-list/episode-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestEpisodeComponent,
    NavComponent,
    UnderConstructionComponent,
    EpisodeListComponent
  ],
  imports: [
    BrowserModule,
    EpisodeModule,
    AppRoutingModule,
    HttpClientModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
