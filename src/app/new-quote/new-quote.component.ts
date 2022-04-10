import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

  @Input() btn2="Card";
  @Output() btnPress = new EventEmitter()

  InQuote = '';
  InAuthorName = '';
  InName = '';

  showAddItem = false;
  


  constructor() { }

  ngOnInit(): void {
  }

}
