import { Component, OnInit } from '@angular/core';
import { TopCrimesService } from '../top-crimes.service'

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {

  constructor(private topCrimeService: TopCrimesService) { }

  

  ngOnInit() {
  }

}