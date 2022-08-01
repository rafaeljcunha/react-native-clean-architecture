import { Dispatch } from 'react';
import { CounterModel } from '../model';
import { CounterDispatchTypes } from './counter-reducer.types';

export interface ICounterScreen {
  state: CounterModel;
  dispatch: Dispatch<CounterDispatchTypes>;
}
