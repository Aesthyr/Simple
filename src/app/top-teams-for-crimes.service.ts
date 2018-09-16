import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from './team'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TopTeamsForCrimesService {

  rootUrl = 'http://nflarrest.com/api/v1/crime/topTeams/Theft';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]>{
    return this.http.get<Team[]>(this.rootUrl);
  }
}
