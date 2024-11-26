import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/user/user.interface';
import { getPasswordStrengthValue } from '../../utils/get-password-strength-value';
import { convertPtBrDateToDateObj } from '../../utils/convert-ptbr-date-to-date-obj';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { convertDateObjToPtBrDate } from '../../utils/convert-date-obj-to-ptbr';
import { IGenre } from '../../interfaces/genre.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnChanges, OnInit {

  passwordStrength: number = 0;
  minDate: Date | null = null;
  maxDate: Date | null = null;
  dateValue: Date | null = null;
  state: number = 0;
  displayedColumns: string[] = ['title', 'band', 'genre', 'favorite'];
  filteredGenresList: GenresListResponse = [];

  @Input({ required: true }) genresList: GenresListResponse = [];
  @Input({ required: true }) statesList: StatesListResponse = [];
  @Input({ required: true }) userSelected: IUser = {} as IUser;

  @Output() onFormSubmitEmit = new EventEmitter<void>()

  constructor(private readonly _elRef: ElementRef) {}

  ngOnInit(): void {
    this.setMinAndMaxDate();
  }

  ngOnChanges(changes: SimpleChanges) {
    const USER_CHANGED = changes['userSelected']
    if (USER_CHANGED) {
      this.onPasswordChange(this.userSelected.password);
      this.setBirthDateToDatepicker(this.userSelected.birthDate);
      this.state = this.userSelected.state
      this.filteredGenresList = this.genresList;
    }
  }


  onPasswordChange(password: string) {
    this.passwordStrength = getPasswordStrengthValue(password)
  }

  onDateChange(event: MatDatepickerInputEvent<any, any>) {
    if (!event.value) return; 
    this.userSelected.birthDate = convertDateObjToPtBrDate(event.value)
  }

  displayFn(id : number): string {
    const foundGenre = this.genresList.find((genre: IGenre) => genre.id === id)
    
    return foundGenre ? foundGenre.description : '';
  }

  filterGenres(text: string) {
    if (typeof text == 'number') return;

    const searchTerm = text.toLowerCase()
    this.filteredGenresList = this.genresList.filter((genre) => genre.description.toLowerCase().includes(searchTerm))
  }

  isAnyCheckboxChecked(): boolean {
    return this.userSelected.musics.some((music) => music.isFavorite)
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) {
      this.focusOnInvalidControl(form);
      return
    }

    this.onFormSubmitEmit.emit();
  }

  focusOnInvalidControl(form: NgForm) {
    const keys = Object.keys(form.controls)

    for (const key of keys) {
      if (form.controls[key].invalid) {
        const invalidControl: HTMLElement = this._elRef.nativeElement.querySelector(`[name=${key}]`);
        invalidControl.focus();
        break;
      }      
    }
    
  }

  private setMinAndMaxDate() {
    this.minDate = new Date(new Date().getFullYear() - 100, 0, 1);
    this.maxDate = new Date();
  }

  private setBirthDateToDatepicker(birthDate: string) {
    this.dateValue = convertPtBrDateToDateObj(birthDate)
  }
}
