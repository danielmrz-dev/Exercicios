import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForSyntaxComponent } from "./exercicios/for-syntax/for-syntax.component";
import { CommonModule } from '@angular/common';
import { NgContainerComponent } from "./exercicios/ng-container/ng-container.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ForSyntaxComponent, CommonModule, NgContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
