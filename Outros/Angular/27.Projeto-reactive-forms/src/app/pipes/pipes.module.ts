import { NgModule } from '@angular/core';
import { MaritalStatusPipe } from './marital-status.pipe';
import { PhoneTypePipe } from './phone-type.pipe';
import { AddressTypePipe } from './address-type.pipe';
import { CpfPipe } from './cpf.pipe';

@NgModule({
  declarations: [
    MaritalStatusPipe, 
    PhoneTypePipe, 
    AddressTypePipe, 
    CpfPipe
  ],
  imports: [],
  exports: [
    MaritalStatusPipe, 
    PhoneTypePipe, 
    AddressTypePipe, 
    CpfPipe
  ],
})
export class PipesModule { }
