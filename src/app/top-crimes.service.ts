import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crime } from './crime'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TopCrimesService {


  rootUrl = 'http://nflarrest.com/api/v1/crime';


  constructor(private http: HttpClient) { }

  getCrimes(): Observable<Crime[]>{
    return this.http.get<Crime[]>(this.rootUrl);
  }


}
