import { Counter } from './counter';

describe('Counter', () => {
  it('should create an instance', () => {
    expect(new Counter()).toBeTruthy();
  });

  it('should set account when creat an instance', () => {
    // given
    const account = 0;
    // when
    const counter = new Counter(account);
    // then
    expect(counter.account).toBe(account);
  });

  it('should increase account when call increase', () => {
    // given
    const account = 0;
    const counter = new Counter(account);
    // when
    counter.increase();
    // then
    expect(counter.account).toBe(account + 1);
  });

  it('should decrease account when call decrease', () => {
    // given
    const account = 0;
    const counter = new Counter(account);
    // when
    counter.decrease();
    // then
    expect(counter.account).toBe(account - 1);
  });

  it('should reset account to be zero when call reset', () => {
    // given
    const account = 3;
    const counter = new Counter(account);
    // when
    counter.reset();

    // then
    expect(counter.account).toBe(0);
  });
});
