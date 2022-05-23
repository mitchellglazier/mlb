import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RostersService {

  constructor(private http: HttpClient) { }

  getRoster(teamId: number) {
    return this.http.get(`http://localhost:3000/rosters/${teamId}`)
  }
}
