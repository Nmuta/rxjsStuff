import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs'

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  constructor() { }

  output:string[] = [];
  fruits:string[] = ["apple", "grape", "orange", "peach"]; 

  ngOnInit() {
    const dataSource$ = of(...this.fruits);
    dataSource$.subscribe(x=> this.output.push(x));

  }

}
