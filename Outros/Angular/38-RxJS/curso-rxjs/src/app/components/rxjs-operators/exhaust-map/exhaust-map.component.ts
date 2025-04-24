import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { delay, exhaustMap, fromEvent, interval, Observable, of, take } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss'
})
export class ExhaustMapComponent {

  form!: FormGroup;
  @ViewChild('btn') btn!: ElementRef<HTMLButtonElement>
  private readonly formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: this.formBuilder.control('')
    })
  }

  ngAfterViewInit(): void {
    const clicks = fromEvent(this.btn.nativeElement, "click");
    clicks.pipe(
      exhaustMap(() => {
        console.log("Aguarde...");
        return of(this.form.value).pipe(delay(5000))
      })
    ).subscribe(val => console.log(val))    
  }
}
