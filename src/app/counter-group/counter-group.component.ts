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

  ngOnInit(): void {
    this.generateCounters();
  }

  public size: number = 5;

  public counters!: Array<Counter>;

  public get sum(): number {
    return this.counters.map(counter => counter.account)
                        .reduce((a, b) => a + b);
  }

  setSize(size: number) {
    this.size = size;
    this.counters = new Array<Counter>();
    this.generateCounters();
  }

  private generateCounters() {
    for (let step = 0; step < this.size; step++) {
      this.counters.push(new Counter());
    }
  }
}
