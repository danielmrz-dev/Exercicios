import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-vs-method',
  templateUrl: './pipe-vs-method.component.html',
  styleUrl: './pipe-vs-method.component.scss'
})
export class PipeVsMethodComponent {
  status: number = 3

  muda(): void {
    if (this.status === 1) {
      this.status = 2
    } else {
      this.status = 1
    }
  }
}
