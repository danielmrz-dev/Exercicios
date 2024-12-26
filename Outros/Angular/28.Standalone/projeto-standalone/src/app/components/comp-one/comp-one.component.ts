import { Component, inject, Input, OnInit } from '@angular/core';
import { TransformTextPipe } from '../../pipes/transform-text.pipe';
import { StandaloneDirectiveDirective } from '../../directives/standalone-directive.directive';
import { ServiceService } from '../../services/service.service';
import { ComponentsNgModule } from "../../NgModule/components-ng-module.module";

@Component({
  selector: 'app-comp-one',
  standalone: true,
  imports: [
    TransformTextPipe,
    StandaloneDirectiveDirective,
    ComponentsNgModule
],
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.scss'
})
export class CompOneComponent implements OnInit{
  nome: string = ""
  idade: number = 0
  service = inject(ServiceService)
  @Input({ required:  true }) title: string = ''

  ngOnInit(): void {
    this.service.getObj().subscribe((dados) => {
      this.nome = dados.nome
      this.idade = dados.idade
    })
  }

}
