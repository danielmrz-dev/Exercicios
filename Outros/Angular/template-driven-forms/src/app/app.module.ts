import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgmodelEx1Component } from './ngmodel-ex1/ngmodel-ex1.component';
import { NgmodelEx2Component } from './ngmodel-ex2/ngmodel-ex2.component';
import { NgmodelEx3Component } from './ngmodel-ex3/ngmodel-ex3.component';
import { NgmodelEx4TextareaComponent } from './ngmodel-ex4-textarea/ngmodel-ex4-textarea.component';
import { NgmodelEx5SelectComponent } from './ngmodel-ex5-select/ngmodel-ex5-select.component';
import { NgmodelEx6RadioComponent } from './ngmodel-ex6-radio/ngmodel-ex6-radio.component';
import { NgmodelEx7CheckboxComponent } from './ngmodel-ex7-checkbox/ngmodel-ex7-checkbox.component';
import { NgFormEx8Component } from './ng-form-ex-8/ng-form-ex-8.component';
import { NgFormSubmitEx9Component } from './ng-form-submit-ex-9/ng-form-submit-ex-9.component';
import { NgFormOptionsComponent } from './ng-form-options/ng-form-options.component';
import { NgModelGroupEx11Component } from './ng-model-group-ex11/ng-model-group-ex11.component';
import { FormWithChildrenComponent } from './form-with-children/form-with-children.component';
import { ChildOneComponent } from './form-with-children/child-one/child-one.component';
import { ChildTwoComponent } from './form-with-children/child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    NgmodelEx1Component,
    NgmodelEx2Component,
    NgmodelEx3Component,
    NgmodelEx4TextareaComponent,
    NgmodelEx5SelectComponent,
    NgmodelEx6RadioComponent,
    NgmodelEx7CheckboxComponent,
    NgFormEx8Component,
    NgFormSubmitEx9Component,
    NgFormOptionsComponent,
    NgModelGroupEx11Component,
    FormWithChildrenComponent,
    ChildOneComponent,
    ChildTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
