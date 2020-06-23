import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TransferStateService } from '@scullyio/ng-lib';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient, private transferState: TransferStateService) { }

  getEpisodes(): Observable<Episode[]> {
    return this.transferState.useScullyTransferState(
      'episodes',
      this.http.get<Episode[]>(`${environment.api}/episodes`)
    )
  }

  getEpisode(id: string): Observable<Episode> {
    return this.transferState.useScullyTransferState(
      `episode${id}`,
      this.http.get<Episode>(`${environment.api}/episodes/${id}`)
    )
  }
}


export interface Episode {
  id: number;
  name: string;
  description: string;
  link: string;
  summary: string;
  publishDate: Date;
  duration: string;
  keywords: string;
  imageLink: string;
  timeStamps?: Array<string>
}