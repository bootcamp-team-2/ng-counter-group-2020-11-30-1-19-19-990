import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase account when call increase', () => {
    // given
    component.account = 0;

    // when
    component.increase();

    // then
    expect(component.account).toBe(1);
  });

  it('should decrease account when call decrease', () => {
    // given
    component.account = 0;

    // when
    component.decrease();

    // then
    expect(component.account).toBe(-1);
  });
});
