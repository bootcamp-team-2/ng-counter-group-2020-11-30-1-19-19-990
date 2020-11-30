import { Injectable } from '@angular/core';
import { Counter } from '../models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterGroupService {

  constructor() {
    this.counters = Array<Counter>();
    this.generateCounters();
  }
  public size: number = 5;
  public counters: Array<Counter>;
  public sum(): number {
    return this.counters.reduce((result, element) => {
      return result + element.account;
    }, 0);
  }

  public setSize(newSize: string): void {
    this.size = +newSize;
    this.generateCounters();
  }

  private generateCounters(): void {
    const counters = new Array<Counter>();
    for (let step = 0; step < this.size; step++) {
      counters.push(new Counter());
    }
    this.counters = counters;
  }
}
