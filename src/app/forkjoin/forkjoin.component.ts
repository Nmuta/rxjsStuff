import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin} from 'rxjs'; 
import { timeout } from 'rxjs/operators'; 

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.scss']
})
export class ForkjoinComponent implements OnInit {

  constructor() { }

  output = []; 

  ngOnInit() {
    const observable1$ = new Observable<string>(observer => {
      setTimeout(()=>{observer.next("sunday")},1000)
      setTimeout(()=>{observer.next("monday")},2000)
      //setTimeout(()=>{observer.error("this error, if in effect, would abort the whole forkJoin")},2400)
      setTimeout(()=>{observer.next("tuesday")},3000)
      setTimeout(()=>{observer.complete()},4000)
    })

    const observable2$ = new Observable<string>(observer => {
      setTimeout(()=>{observer.next("quick")},3000)
      setTimeout(()=>{observer.next("brown")},4000)
      setTimeout(()=>{observer.next("fox")},5000)
      setTimeout(()=>{observer.complete()},6000)
    })

    const observable3$ = new Observable<number>(observer => {
      setTimeout(()=>{observer.next(100)},3000)
      setTimeout(()=>{observer.next(300)},4000)
      setTimeout(()=>{observer.next(900)},5000)
      setTimeout(()=>{observer.complete(); console.log("done")},5900)
    })


    const joined = forkJoin(observable1$,observable2$,observable3$);

    joined.subscribe(
      (x:any) =>this.output = x,
      (error:string) => console.log("error")
    )
   
  }

  

}
