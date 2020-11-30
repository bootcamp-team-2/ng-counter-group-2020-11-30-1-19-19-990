import { Counter } from './counter';

describe('Counter', () => {

  it('should set account when create an instance',() => {
    // given
    const account = 20;
    // when
    const counter = new Counter(account);
    // then
    expect(counter.account).toBe(account);
  });
});

