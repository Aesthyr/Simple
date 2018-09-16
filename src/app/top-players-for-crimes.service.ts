import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopPlayersForCrimesService {

  constructor(private http: HttpClient) { }

  configUrl = 'NflArrest.com/api/v1/crime/topPlayers/1';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
