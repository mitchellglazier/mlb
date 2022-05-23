import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Player } from 'src/app/models/player';
import { PlayerReference } from 'src/app/models/playerReference';
import { Team } from 'src/app/models/team';
import { PlayersService } from 'src/app/services/players/players.service';
import { RostersService } from 'src/app/services/rosters/rosters.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import { TeamsService } from 'src/app/services/teams/teams.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit, OnDestroy {
  $rosterSub: Subscription = new Subscription;
  roster: PlayerReference[] = [];
  filteredRoster: PlayerReference[] = [];
  teamId: any;
  team: any;
  teamsSub: Subscription = new Subscription;
  year!: number
  selectedPlayer!: Player;
  playerSub: Subscription = new Subscription;
  playerSearch = ''

  constructor(
    private sharedService: SharedService,
    private rostersService: RostersService,
    private teamsService: TeamsService,
    private playersService: PlayersService,
    private route: ActivatedRoute) {
    this.teamId = this.route.snapshot.paramMap.get("id")
   }

  ngOnInit(): void {
    this.sharedService.currentTeam.subscribe((team: any) => {
      if (team.id) {
        this.team = team;
      } else {
        this.teamsSub = this.teamsService.getTeams().subscribe((teams: any) => {
          this.team = teams.filter((team: Team) => {
            return team.id == this.teamId
          })[0]
        })
      }
    })
    this.$rosterSub = this.rostersService.getRoster(this.teamId).subscribe((roster: any) => {
     this.roster = roster;
     this.filteredRoster = roster;
    })
    this.year = new Date().getFullYear()
  }

  ngOnDestroy() {
    this.$rosterSub.unsubscribe();
    if (this.teamsSub) {
      this.teamsSub.unsubscribe();
    }
  }

  seePlayer(playerRef: PlayerReference) {
    this.playerSub = this.playersService.getPlayer(playerRef.id).subscribe((player: any) => {
      this.selectedPlayer = player
    })
  }

  searchPlayers() {
    if (this.playerSearch.length > 0) {
      this.filteredRoster = this.roster.filter((player: PlayerReference) => {
        return player.name.toLowerCase().includes(
          this.playerSearch.toLowerCase()
        )
      })
    } else {
      this.filteredRoster = this.roster
    }
  }

}
