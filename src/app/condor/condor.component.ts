import { Component, OnInit } from '@angular/core';
import { MessageService} from '../message.service'; 

@Component({
  selector: 'app-condor',
  templateUrl: './condor.component.html',
  styleUrls: ['./condor.component.scss']
})
export class CondorComponent implements OnInit {

  constructor(private msg:MessageService) { }
  activeMessage:string = "not yet.."; 

  

  ngOnInit() {
    this.msg.countEmitter.subscribe(val=>{
      this.activeMessage = val;
    })
  }

}
