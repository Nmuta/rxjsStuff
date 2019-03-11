import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { filter, map, reduce, mergeMap, switchAll, tap, withLatestFrom , take, takeUntil, switchMap} from 'rxjs/operators';
import {from} from 'rxjs'; 

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor() { }

  output:string[]= ["no data yet"];  
  count:number = 0 ; 
  states:string[] = ["Arizona", "Colorado", "New Mexico", "New York", "California"];

  /* MERGEMAP merges two observables into one. You control how the data is formatted in the new stream. 
  then you can subscribe to that new stream */

  ngOnInit() {

    // first observable 
    const runningObservable$ = new Observable<number>(observer => {
        const intv = setInterval(()=> {
          if(this.count < 7){
            this.count++ 
            observer.next(this.count);
          } else {
            observer.complete();
            clearInterval(intv);
          }
      },1000)
    })

    // second observable 
    const stateObservable$ = new Observable<string>(observer =>{
      const intv = setInterval(()=> {
        if(this.count < 7){
          observer.next(this.states[this.count%this.states.length]);
        } else {
          observer.complete();
          clearInterval(intv);
        }
      },1000); 
    })

    // DO A MERGE MAP ON THE TWO STREAMS .... (states and numbers )
    // The incoming streams are async so the data doesn't always line up on a 1:1 basis
    const final = runningObservable$.pipe(
      mergeMap(x => stateObservable$,
      (z,y) => {
        return `${z} ${y}`; 
      })
    )

    
    // SUBSCRIBE TO THEM UNTIL THEY'RE DONE. 
    final.subscribe(
      x=> this.output.push(x),
      (error) => console.log("fail") 
    )


}

}
