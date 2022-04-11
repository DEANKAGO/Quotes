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
    new Quote(1, "it is never night in finland", "Martin", "Kago", 1, 0),
    new Quote(2, "it is never night in finland", "Muchai", "Kago", 3, 0),
    new Quote(3, "it is never night in finland", "Kago", "Martin", 2, 1),

  ]

  addQuote(quote: Quote){
    quote.upvotes=0;
    quote.downvotes=0;
    quote.id=this.quotes.length+1
    this.quotes.push(quote)
    

  }

  arr: number[] = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.arr)

  constructor() { }

  ngOnInit(): void {
  }

}

