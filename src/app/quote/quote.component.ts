import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewQuoteComponent } from '../new-quote/new-quote.component';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Output() isDel = new EventEmitter<boolean>()

  public quotes: Quote[]= [
    new Quote(1, "it is never night in finland", "Martin", "Kago", 1, 0, new Date(2020,0,1)),
    new Quote(2, "it is never night in finland", "Muchai", "Kago", 3, 0, new Date(2020,1,1)),
    new Quote(3, "it is never night in finland", "Kago", "Martin", 2, 1, new Date(2020,2,1)),

  ]

  addQuote(quote: Quote){
    quote.upvotes=0;
    quote.downvotes=0;
    quote.id=this.quotes.length+1
    this.quotes.push(quote)
    
    

  }


  upVot(){
    var arr = this.quotes.map(quote=>quote.upvotes)
    var highest = Math.max(...arr)
    return highest
  }



  deleteQuote(del: boolean, index: number){
    if(del){
      this.quotes.splice(index, 1)
    }
  }

  addUpvote(up: boolean, index: number){
    if(up){
      this.quotes[index].upvotes=this.quotes[index].upvotes+1
    }
  }

  downvote(down: boolean, index: number){
    if(down){
      this.quotes[index].downvotes=this.quotes[index].downvotes-1
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

