import { Component, OnInit, Input, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  btn1= "New Quote";
  btn2="Card";
  btnPress = new EventEmitter()

  card="card";
  cardBool=true;

  btnPressEvent = (str: string) =>{
    this.btnPress.emit(str)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
