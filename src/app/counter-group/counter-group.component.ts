import { Counter } from './../models/counter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  constructor() {
    this.counters = new Array<Counter>();
  }
  public size: number = 5;

  public counters: Array<Counter>;

  ngOnInit(): void {
    for (let step = 0; step < this.size; step++) {
      this.counters.push(new Counter());
    }
  }
  public sum(): number {
    return this.counters.reduce((result, element) => {
      return result + element.account;
    }, 0);

  }

  public setSize(size: string): void{
    this.size = +size;
    this.counters = new Array<Counter>();
    for (let step = 0; step < this.size; step++) {
      this.counters.push(new Counter());
    }

  }

}
