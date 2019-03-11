import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs'; 

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor() { }

  currentNumber:number = 0 ; 

  ngOnInit() {
    let numbers$ = timer(2000, 1000);
    numbers$.subscribe(x => this.currentNumber = x)

  }

}
