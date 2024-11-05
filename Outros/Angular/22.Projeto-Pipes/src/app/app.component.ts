import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { IOperations } from './interfaces/user.interface';
import { operations } from './data/data';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  searchTerm: string = ''
  usersObs: Observable<IOperations[]> | undefined
  
  constructor(private readonly _userService: UsuariosService) {}

  ngOnInit(): void {
    // this.getOperations();
    this.usersObs = this._userService.getUsers()
  }
  
  // getOperations() {
  //   this._userService.getUsers()
  //   .pipe(take(1))
  //   .subscribe(operations => {
  //     this.users$ = operations
  //   })
  // }
}
