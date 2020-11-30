import { Counter } from './counter';

describe('Counter', () => {
  it('should create an instance', () => {
    expect(new Counter()).toBeTruthy();
  });

  it('should set account when create an instance', () => {
    const account = 10;

    let counter = new Counter(account);

    expect(counter.account).toBe(account);
  });

});
