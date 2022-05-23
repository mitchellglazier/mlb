import { Component, Input, OnInit } from '@angular/core';
import { Team } from 'src/app/models/team';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {
  @Input() team!: Team 

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
  }

  sendData(team: Team) {
    this.sharedService.changeTeam(team)
  }

}
