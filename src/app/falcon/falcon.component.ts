import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-falcon',
  templateUrl: './falcon.component.html',
  styleUrls: ['./falcon.component.scss']
})
export class FalconComponent implements OnInit {

  constructor(private msg:MessageService) { }

  activeMessage:string = "not set yet"; 
  
  ngOnInit() {
    this.msg.countEmitter.subscribe(val =>{
      this.activeMessage = val; 
    })
  }

  increment():void {
    this.msg.sendNumber();
  }

}
