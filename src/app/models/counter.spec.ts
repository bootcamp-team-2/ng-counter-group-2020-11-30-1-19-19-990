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

  // it('should increase when creat an instance', () => {
  //   // given
  //   const account = 0;
  //   // when
  //   const counter = new Counter(account);
  //   // then
  //   expect(Counter.account).toBe(account);
  // });
});
