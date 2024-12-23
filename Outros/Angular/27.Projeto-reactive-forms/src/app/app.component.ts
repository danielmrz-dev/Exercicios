import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { UsersListResponse } from './types/users-list-response';
import { take } from 'rxjs';
import { IUser } from './interfaces/user/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { IDialogConfirmationData } from './interfaces/dialog-confirmation-data.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  usersList: UsersListResponse = [];
  userSelectedIndex: number | undefined
  userSelected: IUser = {} as IUser;
  isInEditMode: boolean = false
  enableSaveButton: boolean = false
  userFormUpdated: boolean = false;

  constructor(
    private readonly _usersService: UsersService,
    private readonly _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._usersService.getUsers().pipe(take(1)).subscribe((usersResponse) => {
      this.usersList = usersResponse
    })
  }

  onUserSelect(userIndex: number): void {
    const userFound = this.usersList[userIndex]
    
    if (userFound) {
      this.userSelectedIndex = userIndex
      this.userSelected = structuredClone(userFound)
    }
  }

  onEditButton() {
    this.isInEditMode = true
  }

  onCancelButton() {
    if (this.userFormUpdated) {
      this.openConfirmationDialog(
        {
          title: 'O formulário foi alterado',
          message: 'Deseja realmente cancelar as alterações feitas no formulário?',
        }, (value: boolean) => {
          if (!value) return
            this.isInEditMode = false;
            this.userFormUpdated = false;
        })
    } else {
      this.isInEditMode = false
    }
  }

  onSaveButton() {
    this.openConfirmationDialog(
      {
        title: 'Confirmar alterações de dados',
        message: 'Deseja realmente confirmar as alterações feitas no formulário?',
      }, (value: boolean) => {
        if (!value) return;
          this.saveUserInfos();
          this.isInEditMode = false;
          this.userFormUpdated = false;
      })
  }

  onFormStatusChange(formStatus: boolean) {
    setTimeout(() => this.enableSaveButton = formStatus, 0);
  }

  onUserFormFirstChange() {
    console.log('Recebendo o output');    
    this.userFormUpdated = true
  }

  private openConfirmationDialog(data: IDialogConfirmationData, callback: (value: boolean) => void) {
    if (this.userFormUpdated) {
      const dialogRef = this._matDialog.open(ConfirmationDialogComponent, { data })

      dialogRef.afterClosed().subscribe(callback)
    }
  }

  private saveUserInfos() {
    console.log("Valores alterados!");
  }

}
