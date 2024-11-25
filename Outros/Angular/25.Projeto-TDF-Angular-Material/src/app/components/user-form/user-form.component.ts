import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GenresListResponse } from '../../types/genres-list-response';
import { StatesListResponse } from '../../types/states-list-response';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input({ required: true }) genresList: GenresListResponse = [];
  @Input({ required: true }) statesList: StatesListResponse = [];
  @Input({ required: true }) userSelected: IUser = {} as IUser;

  ngOnInit() {
    // console.log("NgOnInit:");    
    // console.log(this.genresList);
    // console.log(this.statesList);
    // console.log(this.userSelected);    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);    
    // console.log("NgOnChanges:");    
    // console.log(this.genresList);
    // console.log(this.statesList);
    // console.log(this.userSelected);    
  }
}
