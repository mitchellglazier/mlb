import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Team } from 'src/app/models/team';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public team: any = {};
  public subject = new Subject<any>();
  private teamSource = new BehaviorSubject(this.team)
  currentTeam = this.teamSource.asObservable();
  
  constructor() {}

  changeTeam(team: Team) {
    this.teamSource.next(team)
  }
}
