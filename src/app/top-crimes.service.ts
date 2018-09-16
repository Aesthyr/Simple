import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopCrimesService {

  constructor(private http: HttpClient) { }

  configUrl = 'NflArrest.com/api/v1/crime';

  getConfig() {
    return this.http.get(this.configUrl);
  }


}
