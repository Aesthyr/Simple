import { Component, OnInit } from '@angular/core';
import { TopPlayersForCrimesService } from '../top-players-for-crimes.service'
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

}
