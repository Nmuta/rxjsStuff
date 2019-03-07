import { Component, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { filter, map, reduce, mergeMap, switchAll, tap, withLatestFrom , take} from 'rxjs/operators';
import {from} from 'rxjs'; 

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor() { }
  output:number=-99;
  count:number = 0 ; 
  estados:number[] = [44,55,66,77];

  ngOnInit() {

    const running = new Observable<number>(observer => {
        setInterval(()=> {
          this.count = this.count < this.estados.length-1 ? this.count+1 : 0 ; 
          observer.next(this.count);
      },1000)
    })

    const states = new Observable<number>(observer =>{
      setInterval(()=> {
        observer.next(this.estados[this.count]);
      },1000); 
    })

    const stuff$ = from([2,3,4,5]); 

    const final = running.pipe(
      mergeMap(x => states,
      (z,y) => {
        return z+y; 
      })
      
    )
    
    final.subscribe(x=> this.output = x)

  }


}
