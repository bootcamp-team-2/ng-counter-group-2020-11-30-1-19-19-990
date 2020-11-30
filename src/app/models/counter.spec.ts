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
});
