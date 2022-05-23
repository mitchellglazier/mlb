import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit, OnDestroy {
  teams: Team[] = [];
  teamsSub: Subscription = new Subscription

  teamSearch = ""
  filteredTeams: Team[] = []

  leagues: any[] = [];
  divisions: any[] = [];
  selectedLeague: string = '';
  selectedDivision: string = '';
  selectedSort: string = '';

  constructor(private teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsSub = this.teamsService.getTeams().subscribe((teams: any) => {
      this.teams = teams;
      this.filteredTeams = teams;
      this.leagues = [...new Set(teams.map((team: any) => team.leage))];
      this.divisions = [...new Set(teams.map((team: any) => team.division))].sort();
    })
  }

  ngOnDestroy(): void {
    this.teamsSub.unsubscribe();
  }

  searchTeams() {
    this.selectedLeague = '';
    this.selectedDivision = '';
    if (this.teamSearch.length > 0) {
      this.filteredTeams = this.teams.filter((team: Team) => {
        return team.name.toLowerCase().includes(
          this.teamSearch.toLowerCase()
        )
      })
    } else {
      this.filteredTeams = this.teams
    }
  }

  filterLeague() {
    this.teamSearch = '';
    this.selectedDivision = '';
    if (this.selectedLeague) {
      this.filteredTeams = this.teams.filter((team: Team) => {
        return team.leage === this.selectedLeague
      })
    } else {
      this.filteredTeams = this.teams
    }
    if (this.selectedSort) {
      this.sortTeams()
    }
  }

  filterDivision() {
    this.teamSearch = '';
    this.selectedLeague = '';
    if (this.selectedDivision) {
      this.filteredTeams = this.teams.filter((team: Team) => {
        return team.division === this.selectedDivision
      })
    } else {
      this.filteredTeams = this.teams
    }
    if (this.selectedSort) {
      this.sortTeams()
    }
  }

  sortTeams() {
    switch(this.selectedSort) {
      case 'alphabetically':
        this.filteredTeams.sort((a, b) => (a.name > b.name) ? 1 : -1);
        break;
      case 'league/divisions':
        this.filteredTeams.sort((a, b) => (a.division > b.division) ? 1 : -1);
        break;
      default:
        this.filteredTeams = this.teams
    }
  }

}
