import { Component, OnInit } from '@angular/core';
import { TopCrimesService } from '../top-crimes.service'
import { Crime } from '../crime'


@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {

  public crimes;
  public number_of_crimes = "2";
  constructor(private topCrimeService: TopCrimesService) { }


  public onChange(event): void {  
    this.number_of_crimes = event.target.value;
  }

  public filterCrimes(crimes: Crime ) {
    // console.log(this.number_of_crimes);
    return (crimes.arrest_count != "1");
  }


  ngOnInit() {
    
    this.topCrimeService.getCrimes().subscribe(data => this.crimes = data);

   
  }






}
