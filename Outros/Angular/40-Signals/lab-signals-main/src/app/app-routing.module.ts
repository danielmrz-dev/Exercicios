import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsIntroComponent } from './signals-intro/signals-intro.component';
import { EffectsComponent } from './effects/effects.component';
import { ListaElementosComponent } from './lista-elementos/lista-elementos.component';
import { DetalhesElementoComponent } from './detalhes-elemento/detalhes-elemento.component';
import { ComputedSignalComponent } from './computed-signal/computed-signal.component';

const routes: Routes = [
  { path: '', redirectTo: 'elements', pathMatch: 'full' }, 
  { path: 'intro', component: SignalsIntroComponent }, 
  { path: 'effects', component: EffectsComponent }, 
  { path: 'computed', component: ComputedSignalComponent }, 
  {
    path: 'elements', 
    children: [
      { path: '', component: ListaElementosComponent, outlet: 'list' },
      { path: '', component: DetalhesElementoComponent, outlet: 'details' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
