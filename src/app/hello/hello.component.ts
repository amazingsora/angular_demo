import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  name:string = 'this name';
  date:Date = new Date();
  ng_class:string = "ng_class";
  ng_h3:boolean = false;
  ng_multipClass:string = "h3-dom font-w string"
  ng_condition:string = "{'h3-dom':true,'title-dom':false}"
  isActive:boolean = true;
  size:boolean = true;
  ng_ifDiv:boolean = true;
  //循環語句
  colors:Array<string>=['red','orange','yellow'];
  //switch
  type:number =5;
  constructor() { }

  ngOnInit(): void {
  }

}
