import { Counter } from './../models/counter';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set size when create instance', () => {
    expect(component.size).toBe(5);
  });

  it('should contain counters when create instance', () => {
    expect(component.counters.length).toBe(component.size);
  });

  it('should generate sum of all counters when call sum', () => {
    // given
    component.counters[0].account = 1;
    component.counters[1].account = 1;
    component.counters[2].account = 1;

    // when
    const sum = component.sum();

    // then
    expect(sum).toBe(3);
  });

  it('should change count of counters when reset size', () => {
    // given
    component.counters[0].account = 1;
    component.counters[1].account = 1;
    component.counters[2].account = 1;

    // when
    component.setSize('10');

    // then
    expect(component.counters.length).toBe(10);
  });
});
