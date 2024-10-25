import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardHeaderDirective } from './card/directives/base/card-header.directive';
import { CardContentDirective } from './card/directives/base/card-content.directive';
import { CardMainTextDirective } from './card/directives/texts/card-main-text.directive';
import { CardSubTextDirective } from './card/directives/texts/card-sub-text.directive';
import { CardDescriptionTextDirective } from './card/directives/texts/card-description-text.directive';
import { SmallImageDirective } from './card/directives/images/small-image.directive';
import { LargeImageDirective } from './card/directives/images/large-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardHeaderDirective,
    CardContentDirective,
    CardMainTextDirective,
    CardSubTextDirective,
    CardDescriptionTextDirective,
    SmallImageDirective,
    LargeImageDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
