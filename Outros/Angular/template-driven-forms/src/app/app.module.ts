import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgmodelEx1Component } from './ngmodel-ex1/ngmodel-ex1.component';
import { NgmodelEx2Component } from './ngmodel-ex2/ngmodel-ex2.component';
import { NgmodelEx3Component } from './ngmodel-ex3/ngmodel-ex3.component';

@NgModule({
  declarations: [
    AppComponent,
    NgmodelEx1Component,
    NgmodelEx2Component,
    NgmodelEx3Component,
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
