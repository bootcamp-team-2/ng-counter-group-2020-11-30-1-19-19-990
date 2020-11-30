import { Counter } from './../models/counter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter: Counter;

  constructor() {
    this.counter = new Counter();
  }

  public get account(): number {
    return this.counter.account;
  }

  ngOnInit(): void {
  }

  public increase(): void {
    this.counter.Increase();
  }

  public decrease(): void {
    this.counter.Decrease();
  }

}
