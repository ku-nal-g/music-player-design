import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  date = new Date();
  hour:any;
  minute:any;

  hours:any;
  minutes:any;

  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      const date = new Date();
      this.updateDate(date);
    },1000); 
  }

  updateDate(date:Date){
    this.hours = date.getHours();
    this.hour = this.hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour;

    this.minutes = date.getMinutes();
   this.minute = this.minutes < 10 ? '0' + this.minutes : this.minutes.toString();
  }

}
