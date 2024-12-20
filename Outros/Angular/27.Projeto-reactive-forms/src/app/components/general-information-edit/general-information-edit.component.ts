import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesList } from '../../types/countries-list';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { StatesList } from '../../types/states-list';
import { maritalStatusArray } from '../../utils/marital-status-description-map';

@Component({
  selector: 'app-general-information-edit',
  templateUrl: './general-information-edit.component.html',
  styleUrl: './general-information-edit.component.scss',
})
export class GeneralInformationEditComponent implements OnInit, OnChanges {

  countriesListFiltered: CountriesList = [];
  statesListFiltered: StatesList = [];

  @Input({ required: true }) userForm!: FormGroup
  @Input({ required: true }) countriesList: CountriesList = []
  @Input({ required: true }) statesList: StatesList = []

  @Output() onCountrySelectedEmit = new EventEmitter<string>()

  ngOnInit() {
    this.watchCountryFormChangesAndFilter();
    this.watchStateFormChangesAndFilter();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.countriesListFiltered = this.countriesList
    this.statesListFiltered = this.statesList
  }

  get nameControl(): FormControl {
      return this.userForm.get('generalInformation.name') as FormControl
  }

  get emailControl(): FormControl {
      return this.userForm.get('generalInformation.email') as FormControl
  }

  get countryControl(): FormControl {
    return this.userForm.get('generalInformation.country') as FormControl
  }

  get stateControl(): FormControl {
    return this.userForm.get('generalInformation.state') as FormControl
  }

  get maritalStatus() {
    return maritalStatusArray;
  }

  onCountrySelected(event: MatAutocompleteSelectedEvent) {
    this.onCountrySelectedEmit.emit(event.option.value)
  }

  private watchCountryFormChangesAndFilter() {
    this.countryControl.valueChanges.subscribe(this.filterCountriesList.bind(this))
  }

  private watchStateFormChangesAndFilter() {
    this.stateControl.valueChanges.subscribe(this.filterStatesList.bind(this))
  }

  private filterStatesList(searchTerm: string) {
    this.statesListFiltered = this.statesList.filter(state => state.name?.toLowerCase().includes(searchTerm?.toLowerCase().trim()))
  }

  private filterCountriesList(searchTerm: string) {
    this.countriesListFiltered = this.countriesList.filter(country => country.name?.toLowerCase().includes(searchTerm?.toLowerCase().trim()))
  }
}
