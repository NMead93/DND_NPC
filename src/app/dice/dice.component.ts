import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  rollArray: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  four() {
    this.rollArray.push(Math.round(Math.random() * 3) + 1);
  }

  six() {
    this.rollArray.push(Math.round(Math.random() * 5) + 1);
  }

  eight() {
    this.rollArray.push(Math.round(Math.random() * 7) + 1);
  }

  ten() {
    this.rollArray.push(Math.round(Math.random() * 9) + 1);
  }

  twelve() {
    this.rollArray.push(Math.round(Math.random() * 11) + 1);
  }

  twenty() {
    this.rollArray.push(Math.round(Math.random() * 19) + 1);
  }

  onehundred() {
    this.rollArray.push(Math.round(Math.random() * 99) + 1);
  }
}
