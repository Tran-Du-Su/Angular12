import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Su';
  public age = 23;
  public juices = [
    { name: 'Apple', price: 10000, quantity: -10, discount: true },
    { name: 'Orange', price: 15000, quantity: 50 , discount: false},
    { name: 'Lemon', price: 5000, quantity: -50, discount: true   },
    { name: 'Kiwi', price: 20000, quantity: 50 , discount: false},
    { name: 'Tomato', price: 3000, quantity: 50 , discount: false},
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
