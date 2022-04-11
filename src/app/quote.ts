import { Input } from "@angular/core";

export class Quote {


  id: number;
  quote:string;
  authorName: string;
  name: string;
  upvotes: number;
  downvotes: number;
  date: Date;





  showNewQuote: boolean;
  constructor(id: number,  quote: string,  authorName: string, name: string, upvotes: number, downvotes: number, date: Date){
    this.id=id;
    this.quote=quote;
    this.authorName= authorName;
    this.name= name;
    this.upvotes= upvotes;
    this.downvotes= downvotes;
    this.showNewQuote= false;
    this.date= date



  }
}
