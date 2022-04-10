import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {
  [x: string]: any;

  // @Input() btn2="Card";
  // @Output() btnPress = new EventEmitter()
  // @Output() newQuote = new EventEmitter()
  newQuote = new Quote("", "", "");
  

  inQuote = "";
  inAuthorName = "";
  inName = "";




  showAddItem = false;

  SubmitBtn = () => {
    let quoteForm = document.getElementById("onSubmit")
    // quoteForm.reset();
      if (this['myform'].valid) {
        console.log("Form Submitted!");
        this['myform'].reset();
      }
  

  }
  // SubmitBtn = () => {
  //   console.log(showNewQuote)
  //   // this.newQuote.emit({name:this.inName, authorName:this.inAuthorName, quote:this.inQuote})
  // }
  
  // <form name="myForm" #myForm="ngForm"></form>this.myForm.resetForm();



  constructor() { }

  ngOnInit(): void {
  }

}
