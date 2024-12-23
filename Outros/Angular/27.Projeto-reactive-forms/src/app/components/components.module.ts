import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { PipesModule } from "../pipes/pipes.module";
import { UsersListComponent } from './users-list/users-list.component';
import { CommonModule } from "@angular/common";
import { GeneralInformationComponent } from './general-information/general-information.component';
import { UserInfoItemComponent } from './user-info-item/user-info-item.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { PhoneListComponent } from './contact-information/components/phone-list/phone-list.component';
import { AddressListComponent } from './contact-information/components/address-list/address-list.component';
import { DependentsListComponent } from './dependents-list/dependents-list.component';
import { ButtonsContainerComponent } from './buttons-container/buttons-container.component';
import { ButtonStyleDirective } from './buttons-container/button-style.directive';
import { UserInformationContainerComponent } from './user-information-container/user-information-container.component';
import { GeneralInformationEditComponent } from './general-information-edit/general-information-edit.component';
import { ContactInformationEditComponent } from './contact-information-edit/contact-information-edit.component';
import { PhoneListEditComponent } from './contact-information-edit/components/phone-list-edit/phone-list-edit.component';
import { AddressListEditComponent } from './contact-information-edit/components/address-list-edit/address-list-edit.component';
import { DependentsListEditComponent } from './dependents-list-edit/dependents-list-edit.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';


@NgModule({
    declarations: [
      UsersListComponent,
      GeneralInformationComponent,
      UserInfoItemComponent,
      ContactInformationComponent,
      PhoneListComponent,
      AddressListComponent,
      DependentsListComponent,
      ButtonsContainerComponent,
      ButtonStyleDirective,
      UserInformationContainerComponent,
      GeneralInformationEditComponent,
      ContactInformationEditComponent,
      PhoneListEditComponent,
      AddressListEditComponent,
      DependentsListEditComponent,
      ConfirmationDialogComponent
  ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        PipesModule,
        ReactiveFormsModule,
        NgxMaskDirective
    ],
    exports: [
      UsersListComponent,
      GeneralInformationComponent,
      ContactInformationComponent,
      DependentsListComponent,
      ButtonsContainerComponent,
      UserInformationContainerComponent,
      ConfirmationDialogComponent
    ],
    providers: [provideNgxMask()]
})
export class ComponentsModule {}