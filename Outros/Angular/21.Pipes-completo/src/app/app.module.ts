import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
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
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { DecimalPipeComponent } from './decimal-pipe/decimal-pipe.component';
import { CurrencyPipeComponent } from './currency-pipe/currency-pipe.component';

import localePt from "@angular/common/locales/pt"; // 1. Importar a localização brasileira do Angular/Common
import { registerLocaleData } from '@angular/common';
import { ObservableObjectComponent } from './components/observable-object/observable-object.component'; // 2. Importar a função que registra a localização brasileira na aplicação
import { HttpClientModule } from '@angular/common/http';
import { ObservableArrayComponent } from './components/observable-array/observable-array.component';

registerLocaleData(localePt, "pt-BR") // 3. Chamar a função que registra a localização brasileira na aplicação

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
    DatePipeComponent,
    DecimalPipeComponent,
    CurrencyPipeComponent,
    ObservableObjectComponent,
    ObservableArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ // 4. Importar os providers de configurações padrão do DatePipe e do LocaleID e sobrescrever os padrões com os formatos desejados
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: {
        dateFormat: 'dd/MM/YYYY',
        timezone: '+0000'
      }
    },
    { 
      provide: LOCALE_ID, useValue: 'pt-BR',
    },
    {
      provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
