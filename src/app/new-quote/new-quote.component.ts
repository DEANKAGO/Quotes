import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  // @Input() btn2="Card";
  // @Output() btnPress = new EventEmitter()
  // @Output() newQuote = new EventEmitter()
  newQuote = new Quote("", "", "");
  

  inQuote = "";
  inAuthorName = "";
  inName = "";


  showAddItem = false;

  ClearBtn = () => {
    this.inQuote = "";
    this.inAuthorName = "";
    this.inName = "";
  
  }
  // SubmitBtn = () => {
  //   console.log(showNewQuote)
  //   // this.newQuote.emit({name:this.inName, authorName:this.inAuthorName, quote:this.inQuote})
  // }
  


  constructor() { }

  ngOnInit(): void {
  }

}
