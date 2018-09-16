import { Component, OnInit } from '@angular/core';
import { TopPlayersForCrimesService } from '../top-players-for-crimes.service'
import { Player }from '../player'

@Component({
  selector: 'app-top-players-for-crime',
  templateUrl: './top-players-for-crime.component.html',
  styleUrls: ['./top-players-for-crime.component.css']
})
export class TopPlayersForCrimeComponent implements OnInit {

  public players;

  constructor(private topPlayersForCrimesService: TopPlayersForCrimesService) { }

  ngOnInit() {
    this.topPlayersForCrimesService.getPlayers().subscribe(data => this.players = data);
  }

  public filterPlayers(players: Player ) {
    // console.log(this.number_of_crimes);
    return !(players.arrest_count != "1");
  }

}
