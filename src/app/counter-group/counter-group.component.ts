import { CounterGroupService } from './../service/counter-group.service';
import { Counter } from './../models/counter';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {
//   private counterGroupService : CounterGroupService;
  constructor(private counterGroupService: CounterGroupService) {
    this.counterGroupService = counterGroupService;
  }

  ngOnInit(): void {
  }
  public sum(): number {
    return this.counterGroupService.sum();
  }

  public setSize(size: string): void{
 this.counterGroupService.setSize(size);
  }

  public get counters(): Array<Counter>{
    return this.counterGroupService.counters;
  }
  public reset(): void {
     this.counterGroupService.reset();
  }

}
