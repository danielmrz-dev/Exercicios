import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-information-container',
  templateUrl: './user-information-container.component.html',
  styleUrl: './user-information-container.component.scss'
})
export class UserInformationContainerComponent implements OnChanges {
  currentTabIndex: number = 1;
  
  @Input({ required: true }) userSelected: IUser = {} as IUser
  @Input({ required: true }) isInEditMode: boolean = false

  ngOnChanges(_: SimpleChanges): void {
    this.currentTabIndex = 1;    
  }
}
