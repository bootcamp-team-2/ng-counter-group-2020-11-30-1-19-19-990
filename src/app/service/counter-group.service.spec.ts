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

  it('should change count of counters when reset size', () => {
    // given
    service.counters[0].account = 1;
    service.counters[1].account = 1;
    service.counters[2].account = 1;

    // when
    service.setSize('10');

    // then
    expect(service.counters.length).toBe(10);
  });
});
