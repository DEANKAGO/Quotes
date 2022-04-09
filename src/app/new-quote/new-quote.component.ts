import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  @Input() btn1= "New Quote";
  @Input() btn2="Card";
  @Output() btnPress = new EventEmitter()

  card = "card";
  cardBool = true;

  btnPressEvent = (str: string) =>{
    this.btnPress.emit(str)
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
