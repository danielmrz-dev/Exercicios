import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForSyntaxComponent } from "./exercicios/for-syntax/for-syntax.component";
import { CommonModule } from '@angular/common';
import { NgContainerComponent } from "./exercicios/ng-container/ng-container.component";
import { ViewChildComponent } from "./exercicios/view-child/view-child.component";
import { ContentProjectionComponent } from "./exercicios/content-projection/content-projection.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ForSyntaxComponent, CommonModule, NgContainerComponent, ViewChildComponent, ContentProjectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
