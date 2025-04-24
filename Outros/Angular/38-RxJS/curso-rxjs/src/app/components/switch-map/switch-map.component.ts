import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, Observable, of, switchMap } from 'rxjs';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent {

  users$: Observable<any> = of();
  filteredUsers$: Observable<IUser[]> = of();

  @ViewChild("input") input!: ElementRef<HTMLInputElement>

  private readonly service = inject(UsersService);

  ngOnInit(): void {
    this.filteredUsers$ = this.service.getUsers();
  }

  ngAfterViewInit(): void {

    this.filteredUsers$ = fromEvent(this.input.nativeElement, "keyup").pipe(
      map(event => (event.target as HTMLInputElement).value),
      debounceTime(400),
      switchMap(search => this.service.getUsers().pipe(
        map((users) => {
          return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
        })
      ))
    );
  }
}
