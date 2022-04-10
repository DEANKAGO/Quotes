import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() btn1= "New Quote";



  card = "card";
  cardBool = true;
  showAddItem = false;

  btnClick(str: string){
    if (str==='btn1'){
      this.showAddItem=!this.showAddItem;
      return;
    }
    
  }


 


  constructor() { }

  ngOnInit(): void {
  }

}
