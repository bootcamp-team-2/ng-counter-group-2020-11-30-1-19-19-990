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
});
