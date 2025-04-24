import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, Observable, of } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-debounce-time',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './debounce-time.component.html',
  styleUrl: './debounce-time.component.scss'
})
export class DebounceTimeComponent {

  users$: Observable<any> = of()
  @ViewChild("input") input!: ElementRef<HTMLInputElement>

  private readonly service = inject(UsersService);

  ngOnInit(): void {
    this.users$ = this.service.getUsers();
  }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, "keyup").pipe(
      map(event => (event.target as HTMLInputElement).value),
      debounceTime(400)
    ).subscribe(console.log)
  }
}
