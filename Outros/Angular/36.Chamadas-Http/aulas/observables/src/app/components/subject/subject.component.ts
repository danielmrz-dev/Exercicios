import { Component, inject } from '@angular/core';
import { ConsumidorComponent } from './components/consumidor/consumidor.component';
import { SubjectService } from './subject.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-subject',
  standalone: true,
  imports: [ConsumidorComponent],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})

export class SubjectComponent {
  
  showConsumidor: boolean = false;
  private readonly _subjectService = inject(SubjectService);
  
  dispararObs(value: number) {
    this._subjectService.emitValue(value);
  }

}
