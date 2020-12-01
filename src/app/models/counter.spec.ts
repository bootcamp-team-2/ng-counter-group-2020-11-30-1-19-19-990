import { Counter } from './counter';

describe('Counter', () => {

  it('should set account when create an instance', () => {
    // given
    const account = 20;
    // when
    const counter = new Counter(account);
    // then
    expect(counter.account).toBe(account);
  });

  it('should add 1 when increase', () => {
    // given
    const account = 0;
    // when
    const counter = new Counter(account);
    counter.Increase();
    // then
    expect(counter.account).toBe(account + 1);
  });

  it('should minus 1 when decrease', () => {
    // given
    const account = 0;
    // when
    const counter = new Counter(account);
    counter.Decrease();
    // then
    expect(counter.account).toBe(account - 1);
  });
});

