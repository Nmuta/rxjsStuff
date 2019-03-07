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
      while(this.count<1000){
        console.log('numbers running !');
        this.count++;
        observer.next(this.count);
      }
      observer.complete();
    })

    const stateObservable$ = new Observable<string>(observer =>{
       while(this.states.length){
         console.log('states running');
         observer.next(this.states.pop());
       }
       observer.complete();
    })

    // Do a switchmap from the first observable to the other. 
   
    const final = runningObservable$.pipe(switchMap(() =>stateObservable$)); 
      

    
    // SUBSCRIBE TO THEM UNTIL THEY'RE DONE. 
    final.subscribe(x=> this.output.push(x));

}

}
