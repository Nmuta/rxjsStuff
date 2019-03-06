import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  count:number = 0 ; 
  public countEmitter = new EventEmitter<string>();

  sendNumber(){
    this.count++;
    this.countEmitter.emit(`new count is ${this.count}`); 
  }
}
