import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EpisodeComponent } from './episode/episode.component';
import { HomeComponent } from './home/home.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'episode/:id', component: EpisodeComponent },
  { path: 'photos', component: UnderConstructionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
