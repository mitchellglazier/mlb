import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get(`http://localhost:3000/teams`)
  }

}
