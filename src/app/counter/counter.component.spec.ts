import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from '../models/counter';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    component.counter = new Counter();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase counter.account when call increase', () => {
    // given
    component.counter.account = 0;

    // when
    component.increase();

    // then
    expect(component.counter.account).toBe(1);
  });

  it('should decrease counter.account when call decrease', () => {
    // given
    component.counter.account = 0;

    // when
    component.decrease();

    // then
    expect(component.counter.account).toBe(-1);
  });

  it('should reset counter.account to 0 when call reset', () => {
    // given
    component.counter.account = 10;

    // when
    component.reset();

    // then
    expect(component.counter.account).toBe(0);
  });
});
