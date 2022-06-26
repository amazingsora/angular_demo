import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

  username:string='';
  constructor() { }

  username2:string="";

  ngOnInit(): void {
  }
  clickfunction(e:Event){
    console.log("hey");
    alert("yo");

  }
  inputchang(e:Event){
    console.log((<HTMLInputElement>e.target).value);
  }
  getuserName(val:string){
    this.username = val;

  }
}
