import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UserFormController } from './user-form-controller';
import { CountriesService } from '../../services/countries.service';
import { distinctUntilChanged, Subscription, take } from 'rxjs';
import { CountriesList } from '../../types/countries-list';
import { StatesService } from '../../services/states.service';
import { StatesList } from '../../types/states-list';

@Component({
  selector: 'app-user-information-container',
  templateUrl: './user-information-container.component.html',
  styleUrl: './user-information-container.component.scss'
})
export class UserInformationContainerComponent extends UserFormController implements OnInit, OnChanges {
  currentTabIndex: number = 0;
  countriesList: CountriesList = [];
  statesList: StatesList = []
  userFormValueChangesSubs!: Subscription;

  private _countriesService = inject(CountriesService)
  private _statesService = inject(StatesService)
  
  @Input({ required: true }) userSelected: IUser = {} as IUser
  @Input({ required: true }) isInEditMode: boolean = false

  @Output() onFormStatusChangeEmit = new EventEmitter<boolean>()
  @Output() onUserFormFirstChangeEmit = new EventEmitter<void>()

  ngOnInit(): void {
    this.getCountriesList();
    this.onUserFormStatusChange();
  }

  
  ngOnChanges(changes: SimpleChanges): void {
    this.currentTabIndex = 0;
    const HAS_USER_SELECTED = changes['userSelected'] && Object.keys(changes['userSelected'].currentValue).length > 0
    if (HAS_USER_SELECTED) {
      if (this.userFormValueChangesSubs) {
        this.userFormValueChangesSubs.unsubscribe();
      }
      this.fulfillUserForm(this.userSelected)

      this.onUserFormFirstChange()

      this.getStatesList(this.userSelected.country)
    }
  }
  
  onCountrySelected(countryName: string) {
    this.getStatesList(countryName)
  }
  
  private onUserFormFirstChange() {
    this.userFormValueChangesSubs = this.userForm.valueChanges
      .pipe(take(1))
      .subscribe(() => {
        this.onUserFormFirstChangeEmit.emit()
    });
  }

  private onUserFormStatusChange() {
    this.userForm.statusChanges
      .pipe(distinctUntilChanged())
      .subscribe(() => this.onFormStatusChangeEmit.emit(this.userForm.valid))
  }

  private getCountriesList() {
    this._countriesService.getCountries().pipe(take(1)).subscribe((countriesResponse) => {
      this.countriesList = countriesResponse
    })
  }

  private getStatesList(countryName: string) {
    this._statesService.getStates(countryName).pipe(take(1)).subscribe((statesList) => {
      this.statesList = statesList
    })
  }
}
