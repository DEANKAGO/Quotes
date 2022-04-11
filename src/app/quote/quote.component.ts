import { Component, OnInit } from '@angular/core';
import { NewQuoteComponent } from '../new-quote/new-quote.component';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  public quotes: Quote[]= [
    new Quote(1, "it is never night in finland", "", "", 0, 0),
    new Quote(2, "", "", "", 0, 0),
    new Quote(3, "", "", "", 0, 0),
    new Quote(4, "", "", "", 0, 0),


  ]

  arr: number[] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.arr)

  constructor() { }

  ngOnInit(): void {
  }

}
function newQuote(): Quote {
  throw new Error('Function not implemented.');
}

