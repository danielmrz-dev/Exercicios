import { CommonModule } from '@angular/common';
import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { Observable, of, fromEvent, map, debounceTime, throttle, interval, throttleTime, forkJoin, from } from 'rxjs';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-throttle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './throttle.component.html',
  styleUrl: './throttle.component.scss'
})
export class ThrottleComponent {
  users$: Observable<any> = of()
  @ViewChild("input") input!: ElementRef<HTMLInputElement>

  private readonly service = inject(UsersService);

  ngOnInit(): void {
    this.users$ = this.service.getUsers();

    const user1$ = of({ nome: "Daniel" });
    const user2$ = of({ nome: "Ana" });

    from([user1$, user2$]).subscribe((values) => {
      console.log(values);
    })

    forkJoin([user1$, user2$]).subscribe((values) => {
      console.log(values);
    })

  }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, "keyup").pipe(
      map(event => (event.target as HTMLInputElement).value),
      // debounceTime(400)
      throttleTime(1000)
    ).subscribe(console.log)
  }
}
