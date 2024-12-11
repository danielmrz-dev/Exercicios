import { NgModule } from "@angular/core";
import { MaritalStatusPipe } from './marital-status.pipe';
import { PhoneTypePipe } from './phone-type.pipe';
import { FormattedPhoneNumberPipe } from './formatted-phone-number.pipe';

@NgModule({
    declarations: [
      MaritalStatusPipe,
      PhoneTypePipe,
      FormattedPhoneNumberPipe
  ],
    imports: [],
    exports: [
      MaritalStatusPipe,
      PhoneTypePipe,
      FormattedPhoneNumberPipe
    ]
})
export class PipesModule {}