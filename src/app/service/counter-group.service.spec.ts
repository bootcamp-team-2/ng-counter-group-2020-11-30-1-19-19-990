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

  it('should set size when create an instance', () => {
    expect(service.size).toBe(5);
  });

  it('should contain counters when create instance ', () => {
    expect(service.counters.length).toBe(service.size);
  });
  it('should return sum of all counters when call sum ', () => {
    // given
    let expectedSum = 0;
    service.counters.forEach(counter => {
      expectedSum += counter.account;
    });
    // when
    const sum = service.sum();
    // then
    expect(sum).toBe(expectedSum);
  });

  it('should change count of counters when resetSize', () => {
    // given
    // when
    service.setSize('10');
    // then
    expect(service.counters.length).toBe(10);
  });

  it('should reset size and sum to 0', () => {
    // given
    service.setSize('10');
    // when
    service.reset();
    const sum = service.sum();
    // then
    expect(service.counters.length).toBe(0);
    expect(sum).toBe(0);
  });
});
