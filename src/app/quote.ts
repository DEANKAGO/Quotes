import { Input } from "@angular/core";

export class Quote {


  // inQuote = "";
  // inAuthorName = "";
  // inName = "";




  showNewQuote: boolean;
  constructor(public name: string, public authorName: string, public quote: string){
    this.showNewQuote= false;

  }
}
