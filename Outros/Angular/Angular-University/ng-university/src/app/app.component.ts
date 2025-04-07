import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForSyntaxComponent } from "./exercicios/for-syntax/for-syntax.component";
import { CommonModule } from '@angular/common';
import { NgContainerComponent } from "./exercicios/ng-container/ng-container.component";
import { ViewChildComponent } from "./exercicios/view-child/view-child.component";
import { ContentProjectionComponent } from "./exercicios/content-projection/content-projection.component";
import { NgTemplateComponent } from "./exercicios/ng-template/ng-template.component";
import { DirectivesComponent } from "./exercicios/directives/directives.component";
import { HighlightedDirective } from './exercicios/directives/highlighted.directive';
import { ViewEncapsulationComponent } from "./exercicios/view-encapsulation/view-encapsulation.component";
import { DependencyInjectionComponent } from "./exercicios/dependency-injection/dependency-injection.component";
import { ChangeDetectionComponent } from "./exercicios/change-detection/change-detection.component";
import { LifecycleHooksComponent } from "./exercicios/lifecycle-hooks/lifecycle-hooks.component";
import { InternationalizationI18nComponent } from "./exercicios/internationalization-i18n/internationalization-i18n.component";
import { DeferSyntaxComponent } from "./exercicios/defer-syntax/defer-syntax.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ForSyntaxComponent, CommonModule, NgContainerComponent, ViewChildComponent, ContentProjectionComponent, NgTemplateComponent, DirectivesComponent, HighlightedDirective, ViewEncapsulationComponent, DependencyInjectionComponent, ChangeDetectionComponent, LifecycleHooksComponent, InternationalizationI18nComponent, DeferSyntaxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  textoParaComponenteFilho: string = 'Texto externo inicial';
  
  mudarTexto() {
    this.textoParaComponenteFilho = 'Novo valor!';
  }

}
