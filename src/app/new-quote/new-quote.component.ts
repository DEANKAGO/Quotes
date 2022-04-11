import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  [x: string]: any;
  @Input() Btn2 = 'addQuote'

  @Output() add = new EventEmitter<Quote>();
  @Output() BtnPress = new EventEmitter();


  newQuote = new Quote(0, "", "", "", 0, 0);  
  
  

  inQuote = "";
  inAuthorName = "";
  inName = "";
  


  showAddItem = false;


  addQuote(myForm: NgForm) {
    this.newQuote.id=0
    this.newQuote.quote= myForm.value.quote
    this.newQuote.name= myForm.value.name
    this.newQuote.authorName= myForm.value.authorName
    this.add.emit(this.newQuote);
    console.log(this.newQuote)
    // myForm.reset()
  }



  BtnPressEvent = (str: string) =>{
    this['BtnPress'].emit(str);
  }
  
    


  constructor() { }

  ngOnInit(): void {
  }

}

