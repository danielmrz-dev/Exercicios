import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepsBtnsComponent } from './components/steps-btns/steps-btns.component';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { FormStepOneComponent } from './components/form-container/form-step-one/form-step-one.component';
import { StepOneInputComponent } from './components/form-container/form-step-one/step-one-input/step-one-input.component';
import { StepsTitleAndDescriptionComponent } from './components/form-container/steps-title-and-description/steps-title-and-description.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StepsBtnsComponent,
    FormContainerComponent,
    FormStepOneComponent,
    StepOneInputComponent,
    StepsTitleAndDescriptionComponent,
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
