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

  it('should return sum of all counters when call sum', () => {

    service.counters[0].account = 0;
    service.counters[1].account = 1;
    service.counters[2].account = 2;
    service.counters[3].account = 3;
    service.counters[4].account = 4;

    const sum = service.Sum();
    expect(sum).toBe(10);
  });

  it('should reset count of counters when reset size', () => {
    service.SetSize('10');
    expect(service.counters.length).toBe(10);
  });

  it('should reset the sum when resetSum', () => {
    const sum = service.resetSum();
    expect(sum).toBe(0);
  });
});
