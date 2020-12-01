import { CounterGroupService } from './../service/counter-group.service';
import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Counter } from '../models/counter';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent implements OnInit {

  constructor(private counterGroupService: CounterGroupService) {
   }


  public get counters(): Array<Counter>{
    return this.counterGroupService.counters;
  }

  ngOnInit(): void {
  }



  public Sum(): number {
    return this.counterGroupService.Sum();
  }

  public SetSize(size: string): void{
    return this.counterGroupService.SetSize(size);
  }

  public SetSum(): number{
    return this.counterGroupService.resetSum();
  }

}
