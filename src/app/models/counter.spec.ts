import { Counter } from './counter';

describe('Counter', () => {
  it('should create an instance', () => {
    expect(new Counter()).toBeTruthy();
  });

  it('should set account when create an instance', () => {
    const account = 10;

    const counter = new Counter(account);

    expect(counter.account).toBe(account);
  });

  it('should increase account by 1 when call increase', () => {
    const account = 0;
    const counter = new Counter(account);

    counter.increase();

    expect(counter.account).toBe(account + 1);
  });

  it('should decrease account by 1 when call decrease', () => {
    const account = 0;
    const counter = new Counter(account);

    counter.decrease();

    expect(counter.account).toBe(account - 1);
  });

  it('should set account to 0 when call reset', () => {
    const account = 1;
    const counter = new Counter(account);

    counter.reset();

    expect(counter.account).toBe(0);
  });
});
