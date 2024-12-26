import { Component } from '@angular/core';
import { CompOneComponent } from "./components/comp-one/comp-one.component";
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CompOneComponent,
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  titles: string[] = []
  nome = new FormControl('', Validators.required)
}
