import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { filter, map, reduce, mergeMap, switchAll, tap, withLatestFrom , take, takeUntil, switchMap} from 'rxjs/operators';
import {from} from 'rxjs'; 

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  constructor() { }

  output:string[]= ["no data yet"];  
  count:number = 0 ; 
  states:string[] = ["Arizona", "Colorado", "New Mexico", "New York", "California"];

  innerNumber:number= 0; 

  /* SWITCHMAP .... 'switch to a new observable' ... when the inner stream arrives, the outer stream is cancelled.   */

  ngOnInit() {

    // OPEN UP TWO OBSERVABLES 
    const runningObservable$ = new Observable<number>(observer => {
      setInterval(()=> {
        console.log("running the 'runner'");
        this.count++;
        observer.next(this.count);
      },1000)
    })

    const stateObservable$ = new Observable<string>(observer =>{
      const intv = setInterval(()=> {
        console.log("running the 'state'");
        this.innerNumber++;
        console.log("the inner number is ", this.innerNumber);
        observer.next(this.states[this.count%this.states.length]);
        if(this.count>10){
          this.innerNumber = 0; 
          observer.complete();
        }
      },50); 
    })

    // Do a switchmap from the first observable to the other. 
   
    const final = runningObservable$.pipe(switchMap((x) =>{
     console.log("x is ", x);
     
     return stateObservable$
    })); 
      

    
    // SUBSCRIBE TO THEM UNTIL THEY'RE DONE. 
    final.subscribe(x=> {
      console.log("subscribed");
      this.output.push(`${x}`)
    });

}

}
