import { Injectable } from '@angular/core';
import { Counter } from '../models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterGroupService {

  constructor() {
    this.counters = new Array<Counter>();
    for (let step = 0; step < this.size; step++) {
      this.counters.push(new Counter());
    }
  }
  public size: number = 5;

  public counters: Array<Counter>;

  public setSize(size: string): void{
    this.size = +size;
    this.counters = new Array<Counter>();
    for (let step = 0; step < this.size; step++) {
      this.counters.push(new Counter());
    }

  }
  public sum(): number {
    return this.counters.reduce((result, element) => {
      return result + element.account;
    }, 0);
  }

  public reset(): void {
    this.setSize('0');
    // this.sum();
  }
}
