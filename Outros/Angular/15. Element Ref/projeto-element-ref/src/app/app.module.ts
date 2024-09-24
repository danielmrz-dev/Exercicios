import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FocusSecondInputDirective } from './diretivas/focus-second-input.directive';
import { XssComponent } from './xss/xss.component';

@NgModule({
  declarations: [
    AppComponent,
    FocusSecondInputDirective,
    XssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
