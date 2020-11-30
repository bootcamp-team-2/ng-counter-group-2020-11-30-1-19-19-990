import { Component, Input, OnInit } from '@angular/core';
import { Counter } from '../models/counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() counter!: Counter;

  constructor() {
  }

  public get account(): number {
    return this.counter.account;
  }

  ngOnInit(): void {
  }

  public increase(): void {
    this.counter.increase();
  }

  public decrease(): void {
    this.counter.decrease();
  }

  public reset(): void {
    this.counter.reset();
  }

}
