import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter';
import { CounterGroupService } from '../services/counter-group.service';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  counterGroupService: CounterGroupService;

  constructor(counterGroupService: CounterGroupService) {
    this.counterGroupService = counterGroupService;
  }

  ngOnInit(): void {
  }

  public get sum(): number {
    return this.counterGroupService.sum;
  }

  public get counters(): Array<Counter> {
    return this.counterGroupService.counters;
  }

  public setSize(newSize: string): void {
    this.counterGroupService.setSize(newSize.toString());
  }
}
