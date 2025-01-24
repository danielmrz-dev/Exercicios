import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-not-authorized',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-authorized.component.html',
  styleUrl: './not-authorized.component.scss'
})
export class NotAuthorizedComponent implements OnInit {
  dataType: Observable<Data> = of()

  private readonly activatedRoute = inject(ActivatedRoute)

  ngOnInit(): void {
    this.dataType = this.activatedRoute.data
  }
}
