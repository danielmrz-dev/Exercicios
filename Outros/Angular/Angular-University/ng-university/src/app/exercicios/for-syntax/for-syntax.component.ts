import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-for-syntax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-syntax.component.html',
  styleUrl: './for-syntax.component.scss'
})
export class ForSyntaxComponent {
  cursos: string[] = ["Angular", "NgRx", "RxJS", "TypeScript"]
}
