import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUserResponse } from '../../interfaces/user-response.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-object',
  templateUrl: './observable-object.component.html',
  styleUrl: './observable-object.component.scss'
})
export class ObservableObjectComponent implements OnInit {

  user: IUserResponse = {} as IUserResponse;
  // userSubs: Subscription | undefined

  user$!: Observable<IUserResponse>;
  
  constructor(private readonly _usersService: UsersService) {}

  ngOnInit(): void {
    this.user$ = this._usersService.getUserById(2);
    // this.userSubs = this._usersService.getUserById(1)
      // .subscribe((userResponse) => {this.user = userResponse})
  }

  // ngOnDestroy(): void {
  //   this.userSubs && this.userSubs.unsubscribe();
  // }

  selectUser(userId: number) {
    this.user$ = this._usersService.getUserById(userId)
  }
}
