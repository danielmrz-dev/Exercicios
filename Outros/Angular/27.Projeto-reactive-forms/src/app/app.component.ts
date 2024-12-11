import { Component, OnInit } from '@angular/core';
import { CountriesService } from './services/countries.service';
import { StatesService } from './services/states.service';
import { CitiesService } from './services/cities.service';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { take } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersList: UsersListResponse = [];
  currentTabIndex: number = 1

  constructor(
    private readonly _countriesService: CountriesService,
    private readonly _statesService: StatesService,    
    private readonly _citiesService: CitiesService,    
    private readonly _usersService: UsersService
  ) {}

  ngOnInit(): void {
    this._usersService.getUsers().pipe(take(1)).subscribe((usersResponse) => {
      this.usersList = usersResponse
    })
  }
}
