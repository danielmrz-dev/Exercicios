import { Component, inject } from '@angular/core';
import { SubjectService } from '../../subject.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-consumidor',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './consumidor.component.html',
  styleUrl: './consumidor.component.scss'
})
export class ConsumidorComponent {
  
  subject$!: Observable<number>;
  private readonly _subjectService = inject(SubjectService)

  ngOnInit(): void {
    this.subject$ = this._subjectService.valueChanged$    
  }

}
