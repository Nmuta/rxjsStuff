import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, interval, fromEvent } from 'rxjs';
import { filter, map, reduce, mergeMap, switchAll, tap, withLatestFrom , take, takeUntil, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})
export class SwitchmapComponent implements OnInit {

  @ViewChild('userInput') userInput:ElementRef; 

  constructor() { }
  currentValue:string=""; 
  output:string[]= ["no data yet"];  
  count:number = 0 ; 
  states:string[] = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']
  
   
  innerNumber:number= 0; 

  /* SWITCHMAP .... 'switch to a new observable' ... there's an outer observable that governs the resetting of an inner observable. The outer observable is called once
  which kicks off the inner one.  Then the inner observable runs until the outer one is called again */

  ngOnInit() {
    // 1ST OBSERVABLE IS A KEY UP EVENT 
    const source$ = fromEvent(this.userInput.nativeElement, 'keyup');

    source$.subscribe(x=> this.currentValue = this.userInput.nativeElement.value);

    // 2ND OBSERVABLE IS AN INTERVAL THAT RESTARTS WHEN THE FIRST INTERVAL FIRES AGAIN. 
    const stateObservable$ = new Observable<string[]>(observer =>{
         this.output = [];
         setInterval(()=>{
          observer.next( 
            this.states.filter(x=> {
              return (this.currentValue && x.substring(0,this.currentValue.length).toLowerCase()== this.currentValue.toLowerCase()) 
            }) || []
          )
         },1)
    })
    // Do a switchmap from the first observable to the other. 
   
    const final= source$.pipe(switchMap(() =>stateObservable$)); 
    //const final= source.pipe(switchMap(() =>stateObservable$, (x:string,y)=> y.concat([x])  )); // can possibly return data from outer obs.
      
    // SUBSCRIBE  
    final.subscribe(x=> this.output = x);

}

}
