import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs'; 

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit {

  constructor() { }
 
  value1: number=0; 
  value2: number=0;
  value3: number=0;
  runningTally:number = 0; 
  
  ngOnInit() {
    const obs1$ = new Observable<number>(observer=>{
      const int1 = setInterval(()=> {
        observer.next(++this.value1);
        if(this.value1 >= 10){ clearInterval(int1); observer.complete();}
     },50);
    })

    const obs2$ = new Observable<number>(observer=>{
      const int2 = setInterval(()=> {
        observer.next(++this.value2);
        if(this.value2 >= 10){ clearInterval(int2); observer.complete();}
       },500);
    })


    const obs3$ = new Observable<number>(observer=>{
      const int3 = setInterval(()=> {
        observer.next(++this.value3);
        if(this.value3 >= 10){ clearInterval(int3); observer.complete();}
      },1000);
    })

    const allOfThem$= combineLatest(obs1$, obs2$, obs3$);

    allOfThem$.subscribe( ([a,b,c]) =>{
      this.runningTally = a+b+c; 
      console.log(`${a}, ${b}, ${c} and ${this.runningTally}`);
    })



  }

}
