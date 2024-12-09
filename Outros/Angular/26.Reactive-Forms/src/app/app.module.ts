import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormControlComponent } from './Exemplos/form-control/form-control.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidadorAssincronoComponent } from './Exemplos/validador-assincrono/validador-assincrono.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormGroupComponent } from './Exemplos/form-group/form-group.component';
import { FormArrayComponent } from './Exemplos/form-array/form-array.component';
import { FormArrayComGroupComponent } from './Exemplos/form-array-com-group/form-array-com-group.component';
import { FormBuilderComponent } from './Exemplos/form-builder/form-builder.component';
import { FormBuilderExternoComponent } from './Exemplos/form-builder-externo/form-builder-externo.component';
import { FormBuilderExternoComServiceComponent } from './Exemplos/form-builder-externo-com-service/form-builder-externo-com-service.component';
import { FormCompFilhosComponent } from './Exemplos/form-comp-filhos/form-comp-filhos.component';
import { EnderecoComponent } from './Exemplos/form-comp-filhos/components/endereco/endereco.component';
import { MarkAsTouchedComponent } from './Exemplos/mark-as-touched/mark-as-touched.component';
import { Desafio01Component } from './Exercicios/desafio01/desafio01.component';
import { FormComChamadaHttpComponent } from './Exemplos/form-com-chamada-http/form-com-chamada-http.component';
import { CrossValidatorComponent } from './Exemplos/cross-validator/cross-validator.component';
import { AddAndRemoveControlComponent } from './Exemplos/add-and-remove-control/add-and-remove-control.component';

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    ValidadorAssincronoComponent,
    FormGroupComponent,
    FormArrayComponent,
    FormArrayComGroupComponent,
    FormBuilderComponent,
    FormBuilderExternoComponent,
    FormBuilderExternoComServiceComponent,
    FormCompFilhosComponent,
    EnderecoComponent,
    MarkAsTouchedComponent,
    Desafio01Component,
    FormComChamadaHttpComponent,
    CrossValidatorComponent,
    AddAndRemoveControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
