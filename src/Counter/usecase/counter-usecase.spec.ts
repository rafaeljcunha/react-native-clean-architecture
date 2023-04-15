import { CounterUsecase } from './counter-usecase';

const counterUseCase = new CounterUsecase(0);

describe('counter-usecase', () => {
  beforeEach(() => {
    counterUseCase.reset();
  });

  it('should verify counter value', () => {
    expect(counterUseCase.counter.count).toEqual(0);
  });

  it('should verify maxValue', () => {
    expect(counterUseCase.maxValue).toEqual(10);
  });

  it('should change maxValue', () => {
    const changeMaxValue = new CounterUsecase(0, 30);
    expect(changeMaxValue.maxValue).toEqual(30);
  });

  it('should verify counter incremented value', () => {
    const { count } = counterUseCase.increment({ value: 2 });
    expect(count).toEqual(2);
  });

  it('should verify counter reseted value', () => {
    const { count } = counterUseCase.reset();
    expect(count).toEqual(0);
  });

  it('should verify counter decremented value', () => {
    counterUseCase.increment({ value: 2 });
    const { count } = counterUseCase.decrement({ value: 1 });
    expect(count).toEqual(1);
  });
});
