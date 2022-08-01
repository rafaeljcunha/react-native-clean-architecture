import { CounterModel } from '../model';

export interface CounterDomain {
  increment(params: CounterDomain.Value): CounterModel;
  decrement(params: CounterDomain.Value): CounterModel;
  reset(): CounterModel;
}

export namespace CounterDomain {
  export type Value = {
    value: number;
  };
}
