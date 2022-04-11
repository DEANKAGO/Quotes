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


  newQuote = new Quote(0, "", "", "", 0, 0, new Date());  
  
  

  inQuote = "";
  inAuthorName = "";
  inName = "";
  


  showAddItem = false;


  addQuote(myForm: NgForm) {
    let createdQuote= <Quote>{}
    createdQuote.id=0
    createdQuote.quote= myForm.value.quote
    createdQuote.name= myForm.value.name
    createdQuote.authorName= myForm.value.authorName
    this.add.emit(createdQuote);
    myForm.reset()
  }



  BtnPressEvent = (str: string) =>{
    this['BtnPress'].emit(str);
  }
  
    


  constructor() { }

  ngOnInit(): void {
  }

}

