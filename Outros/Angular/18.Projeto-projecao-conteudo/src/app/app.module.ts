import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTextTitleDirective } from './components/card/directives/card-text-title.directive';
import { CardTextSubtitleDirective } from './components/card/directives/card-text-subtitle.directive';
import { CardTextDescriptionDirective } from './components/card/directives/card-text-description.directive';
import { CardAvatarSmallDirective } from './components/card/directives/card-avatar-small.directive';
import { CardAvatarLargeDirective } from './components/card/directives/card-avatar-large.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardTextTitleDirective,
    CardTextSubtitleDirective,
    CardTextDescriptionDirective,
    CardAvatarSmallDirective,
    CardAvatarLargeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
