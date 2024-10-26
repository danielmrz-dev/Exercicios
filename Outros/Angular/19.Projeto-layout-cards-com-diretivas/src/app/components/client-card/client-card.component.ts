import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss']
})
export class ClientCardComponent implements OnInit {
  bgColor: string = "red"

  ngOnInit(): void {
    setTimeout(() => {
      this.bgColor = "blue"
    }, 3000)
  }
}
