import { TestBed } from '@angular/core/testing';

import { CounterGroupService } from './counter-group.service';

describe('CounterGroupService', () => {
  let service: CounterGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set size when create instance', () => {
    expect(service.size).toBe(5);
  });

  it('should contain counters when create instance', () => {
    expect(service.counters.length).toBe(service.size);
  });

  it('should return sum of all counters when call sum', () => {

    service.counters[0].account = 1;
    service.counters[1].account = 2;
    service.counters[2].account = 3;

    expect(service.sum).toBe(6);
  });

  it('should change count of counters when set size', () => {

    service.setSize('10');

    expect(service.counters.length).toBe(10);
  });
});
