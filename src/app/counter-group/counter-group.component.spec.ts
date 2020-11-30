import { CounterComponent } from './../counter/counter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent]
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

  it('should set size when create an instance', () => {
    expect(component.size).toBe(5);
  });

  it('should contain counters when create instance ', () => {
    expect(component.counters.length).toBe(component.size);
  });
  it('should return sum of all counters when call sum ', () => {
    // given
    let expectedSum = 0;
    component.counters.forEach(counter => {
      expectedSum += counter.account;
    });
    // when
    const sum = component.sum();
    // then
    expect(sum).toBe(expectedSum);
  });
});
