import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public day: string;
  public colorBlue: string;

  constructor() {
  }

  ngOnInit(): void {
    this.day = 'Sunday';
    this.colorBlue = '#1E88E5';
  }

  resetDay(): void {
    this.ngOnInit();
  }

  changeDay(): void {
    this.day = 'Monday';
  }

}
