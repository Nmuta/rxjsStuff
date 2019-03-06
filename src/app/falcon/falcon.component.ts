import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-falcon',
  templateUrl: './falcon.component.html',
  styleUrls: ['./falcon.component.scss']
})
export class FalconComponent implements OnInit {

  constructor() { }

  activeMessage:string = "not set yet"; 
  
  ngOnInit() {
  }

}
