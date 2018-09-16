import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class TopPlayersForCrimesService {

  rootUrl = 'http://nflarrest.com/api/v1/crime/topPlayers/Theft';


  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Player[]>{
    return this.http.get<Player[]>(this.rootUrl);
  }
  
}
