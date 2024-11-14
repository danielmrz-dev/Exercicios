import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-model-group-ex11',
  templateUrl: './ng-model-group-ex11.component.html',
  styleUrl: './ng-model-group-ex11.component.scss'
})
export class NgModelGroupEx11Component {

  logarDados(form: NgForm) {
    console.log(form.value);
    
  }
}
