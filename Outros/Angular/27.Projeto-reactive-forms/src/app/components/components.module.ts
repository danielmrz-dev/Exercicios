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
      ContactInformationEditComponent
  ],
    imports: [
        CommonModule,
        AngularMaterialModule,
        PipesModule,
    ],
    exports: [
      UsersListComponent,
      GeneralInformationComponent,
      ContactInformationComponent,
      DependentsListComponent,
      ButtonsContainerComponent,
      UserInformationContainerComponent
    ],
})
export class ComponentsModule {}