import { Component, OnInit } from '@angular/core';
import { TopTeamsForCrimesService } from '../top-teams-for-crimes.service'
import { Team } from '../team'
@Component({
  selector: 'app-top-teams-for-crime',
  templateUrl: './top-teams-for-crime.component.html',
  styleUrls: ['./top-teams-for-crime.component.css']
})
export class TopTeamsForCrimeComponent implements OnInit {

  public teams;

  constructor(private topTeamsForCrimesService: TopTeamsForCrimesService) { }

  ngOnInit() {
    this.topTeamsForCrimesService.getTeams().subscribe(data => this.teams = data);
  }


  public filterTeams(teams: Team ) {
    // console.log(this.number_of_crimes);
    return !(teams.Team_city != "Kansas City");
  }
}
