import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsBtnsComponent } from './components/steps-btns/steps-btns.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { FormStepOneComponent } from './components/form-container/form-step-one/form-step-one.component';
import { StepsTitleAndDescriptionComponent } from './components/form-container/steps-title-and-description/steps-title-and-description.component';
import { FormsModule } from '@angular/forms';
import { FormStepTwoComponent } from './components/form-container/form-step-two/form-step-two.component';
import { ToggleSwitchComponent } from './components/form-container/form-step-two/toggle-switch/toggle-switch.component';
import { PaymentFrequencyPipe } from './pipes/payment-frequency.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StepsBtnsComponent,
    FormContainerComponent,
    FormStepOneComponent,
    StepsTitleAndDescriptionComponent,
    FormStepTwoComponent,
    ToggleSwitchComponent,
    PaymentFrequencyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }