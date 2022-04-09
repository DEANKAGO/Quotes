import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() btn1= "New Quote";
  @Input() btn2="Card";

  card="card";
  cardBool=true;

  constructor() { }

  ngOnInit(): void {
  }

}
