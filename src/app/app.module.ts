import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';
import { TopPlayersForCrimeComponent } from './top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './top-teams-for-crime/top-teams-for-crime.component';



const appRoutes: Routes = [
  { path: 'crimes', component: TopCrimesComponent },
  { path: 'player',      component: TopPlayersForCrimeComponent },
  { path: 'player/:id',      component: TopPlayersForCrimeComponent },
  { path: 'team',      component: TopTeamsForCrimeComponent },
  { path: '',
    redirectTo: '/crimes',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersForCrimeComponent,
    TopTeamsForCrimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
