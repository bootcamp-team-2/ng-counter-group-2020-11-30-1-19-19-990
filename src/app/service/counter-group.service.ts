import { Injectable } from '@angular/core';
import { Counter } from '../models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterGroupService {

  constructor() {
    this.counters = Array<Counter>();
    this.generateNewCounters();
  }

  public size: number = 5;
  public counters: Array<Counter>;

  private generateNewCounters() {
    for (let step = 0; step < this.size; step++) {
      this.counters.push(new Counter());
    }
  }

  public Sum(): number {
    return this.counters.reduce((result, it) => {
      return result + it.account;
    }, 0);
  }

  public SetSize(size: string): void{
    this.size = +size;
    this.counters = new Array<Counter>();
    this.generateNewCounters();
  }
}
