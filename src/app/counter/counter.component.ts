import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  myVal:number = -2; 

  ngOnInit() {
    const interv = interval(1000); 
    interv.subscribe(val=>{
      this.myVal++; 
    })
  }

}
