import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() btn1= "New Quote";
  @Output() btnPress = new EventEmitter()

  card = "card";
  cardBool = true;
  showAddItem = false;

  btnPressEvent = (str: string) =>{
    this.btnPress.emit(str)
    console.log(str);
    if (str === 'btn'){
      this.showAddItem
      return;
    }
    
  }


 


  constructor() { }

  ngOnInit(): void {
  }

}
