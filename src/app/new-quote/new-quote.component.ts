import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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


  // @Input() btn2="Card";
  // @Output() btnPress = new EventEmitter()
  // @Output() newQuote = new EventEmitter()
  newQuote = new Quote(0, "", "", "", 0, 0);  
  
  

  inQuote = "";
  inAuthorName = "";
  inName = "";
  


  showAddItem = false;


  addQuote() {
    this.add.emit(this['quoted']);
    // this['quoted'] = new Quote(0,"", "", "", 0, 0)

  }

  // SubmitBtn(str: string) {
  //   if(str==='SubmitBtn') {
  //     this.addQuote;
  //     return
  //   }

  // }

  BtnPressEvent = (str: string) =>{
    this['BtnPress'].emit(str);
  }
  
    
  
  SubmitBtn = () => {
    // let quoteForm = document.getElementById("onClick")
      if (this['myform'].valid) {
        this.BtnPressEvent = (str: string) =>{
          this['BtnPress'].emit(str);
        }
        // console.log(this['myform'])
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

// @Output() add = new EventEmitter<Quote>();
// addQuote() {
//   this.add.emit(this.quoted);
//   this.quoted = new Quote(0, "", "", "", "", ), 0, 0);
// }