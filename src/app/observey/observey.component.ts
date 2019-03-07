import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-observey',
  templateUrl: './observey.component.html',
  styleUrls: ['./observey.component.scss']
})
export class ObserveyComponent implements OnInit {

  constructor() { }

  tick:number=0;

  msg1: string;
  msg2: string;
  msg3: string;

  ngOnInit() {
    const runThenStop = new Observable(observer =>{
      setTimeout(()=>{
        observer.next("first payload")
      },1000); 
      setTimeout(()=>{
        observer.next("second payload")
      },4000);
      setTimeout(()=>{
        observer.next("third payload")
      },6000);
      setTimeout(()=>{
        observer.error("stop the presses!")
      },8000);
      setTimeout(()=>{
        observer.complete()
      },9000);
    }); 

    // not used, but this observable would never hit the error or the complete method. 
    const neverEnding = new Observable(observer=>{
      setInterval(()=>{
        observer.next(`still going! + ${this.tick}`); 
        this.tick++;
      },1000)
    })

    runThenStop.subscribe(
      (data: string)=> this.msg1=data, 
      (error: string)=> this.msg2=error, 
      ()=> this.msg3="completed"
    )
  }

}
