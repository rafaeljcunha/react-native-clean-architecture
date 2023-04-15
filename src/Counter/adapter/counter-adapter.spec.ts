import {
  CounterActionTypes,
  CounterReducerAction,
} from '../types/counter-reducer.types';
import { INITIAL_STATE, counterReducer } from './counter-adapter';

const setup = (type?: CounterActionTypes) =>
  counterReducer(INITIAL_STATE, {
    type,
  } as CounterReducerAction);

describe('counter-adapter', () => {
  beforeEach(() => {
    setup(CounterActionTypes.RESET);
  });

  it('should verify initial state values', () => {
    const { count } = setup();

    expect(count).toEqual(0);
  });

  it('should increment counter', () => {
    const { count } = setup(CounterActionTypes.INCREMENT);

    expect(count).toEqual(1);
  });

  it('should reset counter', () => {
    const { count } = setup(CounterActionTypes.RESET);

    expect(count).toEqual(0);
  });

  it('should decrement counter', async () => {
    setup(CounterActionTypes.INCREMENT);
    setup(CounterActionTypes.INCREMENT);
    const { count } = setup(CounterActionTypes.DECREMENT);

    expect(count).toEqual(1);
  });
});
