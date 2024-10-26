import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceCardComponent } from './components/balance-card/balance-card.component';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { DebitCardComponent } from './components/debit-card/debit-card.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardLineComponent } from './components/card-line/card-line.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardContentDirective } from './components/card/directives/base/card-content.directive';
import { CardHeaderDirective } from './components/card/directives/base/card-header.directive';
import { CardComponent } from "./components/card/card.component";
import { CardTitleTextDirective } from './components/card/directives/texts/card-title-text.directive';
import { CardDescriptionTextDirective } from './components/card/directives/texts/card-description-text.directive';
import { CardIconDirective } from './components/card/directives/images/card-icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    BalanceCardComponent,
    CreditCardComponent,
    DebitCardComponent,
    ClientCardComponent,
    CardItemComponent,
    CardLineComponent,
    CardTitleComponent,
    CardHeaderDirective,
    CardContentDirective,
    CardComponent,
    CardTitleTextDirective,
    CardDescriptionTextDirective,
    CardIconDirective
  ],
  imports: [
    BrowserModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
