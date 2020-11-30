import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter';

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
    this.counters = this.generateCounters();
  }
  private generateCounters(): Array<Counter> {
    const counters = new Array<Counter>();
    for (let step = 0; step < this.size; step++) {
      counters.push(new Counter());
    }
    return counters;
  }

  public sum(): number {
    return this.counters.reduce((result, element) => {
      return result + element.account;
    }, 0);
  }
  public setSize(newSize: string): void{
    this.size = +newSize;
    this.counters = this.generateCounters();
  }
}
