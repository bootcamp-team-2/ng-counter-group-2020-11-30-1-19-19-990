import { Injectable } from '@angular/core';
import { Counter } from '../models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterGroupService {

  constructor() {
    this.size = 5;
    this.counters = new Array<Counter>();
    this.generateCounters();
  }

  public counters: Array<Counter>;
  public size: number;

  public get sum(): number {
    return this.counters.reduce((result, element) => {
      return result + element.account;
    }, 0);
  }

  setSize(size: string): void {
    this.size = +size;
    this.counters = new Array<Counter>();
    this.generateCounters();
  }

  private generateCounters(): void {
    for (let step = 0; step < this.size; step++) {
      this.counters.push(new Counter());
    }
  }
}
