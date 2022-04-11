import { Component, OnInit } from '@angular/core';
import { NewQuoteComponent } from '../new-quote/new-quote.component';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]= [
    new Quote(1, "it is never night in finland", "", "", 0, 0),
    new Quote(2, "", "", "", 0, 0),
    new Quote(3, "", "", "", 0, 0),
    new Quote(4, "", "", "", 0, 0),



  ]

  constructor() { }

  ngOnInit(): void {
  }

}
function newQuote(): Quote {
  throw new Error('Function not implemented.');
}

