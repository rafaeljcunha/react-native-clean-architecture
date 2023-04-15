import { CounterModel } from './counter-model';

describe('counter-model', () => {
  it('should verify a CounterModel count type accept number', () => {
    const counter: CounterModel = { count: 20 };

    expect(counter).toEqual(
      expect.objectContaining<CounterModel>({
        count: expect.any(Number),
      }),
    );
  });
});
