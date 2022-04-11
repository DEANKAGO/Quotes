import { Input } from "@angular/core";

export class Quote {


  id: number;
  quote:string;
  authorName: string;
  name: string;
  upvotes: number;
  downvotes: number;





  showNewQuote: boolean;
  constructor(id: number,  quote: string,  authorName: string, name: string, upvotes: number, downvotes: number){
    this.showNewQuote= false;
    this.id=id;
    this.quote=quote;
    this.authorName= authorName;
    this.name= name;
    this.upvotes= upvotes;
    this.downvotes= downvotes;


  }
}
