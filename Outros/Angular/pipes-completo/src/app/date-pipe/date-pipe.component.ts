import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pipe',
  templateUrl: './date-pipe.component.html',
  styleUrl: './date-pipe.component.scss'
})
export class DatePipeComponent implements OnInit {
  minhaData: string = "2024-10-28T21:00:00.000Z"

  minhaDataObj: Date = new Date(this.minhaData)

  ngOnInit(): void {
    console.log("Data convertida para região: ", new Date(this.minhaData));
    console.log("Data UTC-0: ", new Date(this.minhaData).toUTCString());
    console.log("Timestamp: ", new Date(this.minhaData).getTime());
  }
}
