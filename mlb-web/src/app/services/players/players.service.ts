import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http: HttpClient) { }

  getPlayer(playerId: number) {
    return this.http.get(`http://localhost:3000/players/${playerId}`)
  }
}
