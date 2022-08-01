import {
  CounterActionTypes,
  CounterReducerAction,
} from '../types/counter-reducer.types';
import { CounterUsecase } from '../usecase';
import { CounterModel } from '../model';

const counterInteractor = new CounterUsecase(0);
export const INITIAL_STATE: CounterModel = { ...counterInteractor.counter };

function incrementReducer(): CounterModel {
  counterInteractor.increment({ value: 1 });
  return { ...counterInteractor.counter };
}

function decrementReducer(): CounterModel {
  counterInteractor.decrement({ value: 1 });
  return { ...counterInteractor.counter };
}

export function counterReducer(
  state = INITIAL_STATE,
  action: CounterReducerAction,
) {
  switch (action.type) {
    case CounterActionTypes.INCREMENT:
      return incrementReducer();
    case CounterActionTypes.DECREMENT:
      return decrementReducer();
    case CounterActionTypes.RESET:
      return counterInteractor.reset();
    default:
      return state;
  }
}
