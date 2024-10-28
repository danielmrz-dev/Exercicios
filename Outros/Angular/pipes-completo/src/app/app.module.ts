import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusPipe } from './pipes/status.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PipeIntroductionComponent } from './pipe-introduction/pipe-introduction.component';
import { JsonComponent } from './json/json.component';
import { LowercaseComponent } from './lowercase/lowercase.component';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { SliceComponent } from './slice/slice.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { DatePipeComponent } from './date-pipe/date-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    TruncatePipe,
    PipeIntroductionComponent,
    JsonComponent,
    LowercaseComponent,
    UppercaseComponent,
    SliceComponent,
    TitleCaseComponent,
    DatePipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
