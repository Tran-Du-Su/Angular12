import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Su';
  public age = 23;
  public juices = ['Apple', 'Orange', 'Banana', 'Lemon', 'Tomato'];

  constructor() { }

  ngOnInit(): void {

  }

}
