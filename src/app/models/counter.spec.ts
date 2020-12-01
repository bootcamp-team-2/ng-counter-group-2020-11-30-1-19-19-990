import { Counter } from './counter';

describe('Counter', () => {
  it('should create an instance', () => {
    expect(new Counter()).toBeTruthy();
  });

  it('should create an instance', () => {
    expect(new Counter().account).toBe(0);
  });

  it('should create an instance', () => {
    const account = 10;
    const counter = new Counter(account);
    expect(counter.account).toBe(10);
  });

  it('should increase account by 1 when call increase', () => {
    const account = 0;
    const counter = new Counter(account);

    counter.Increase();

    expect(counter.account).toBe(account + 1);
  });

  it('should decrease account by 1 when call increase', () => {
    const account = 0;
    const counter = new Counter(account);

    counter.Decrease();

    expect(counter.account).toBe(account - 1);
  });

  it('should reset the account to 0 when call resetButton', () => {
    const account = 10;
    const counter = new Counter(account);

    counter.ResetButton();

    expect(counter.account).toBe(0);
  });
});
