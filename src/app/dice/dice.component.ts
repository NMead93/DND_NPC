import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
    dices: string[] = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
    dice1: string;
    dice2: string;
    dice3: string;
    dice4: string;


  constructor() { }

  ngOnInit() {
      this.dice1 = this.dices[0];
      this.dice2 = this.dices[1];
      this.dice3 = this.dices[2];
      this.dice4 = this.dices[3];
  }

}
