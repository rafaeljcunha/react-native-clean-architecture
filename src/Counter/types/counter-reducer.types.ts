export enum CounterActionTypes {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
  RESET = 'reset',
}

type IncrementAction = {
  type: typeof CounterActionTypes.INCREMENT;
};

type DecrementAction = {
  type: typeof CounterActionTypes.DECREMENT;
};

type ResetAction = {
  type: typeof CounterActionTypes.RESET;
};

export type CounterDispatchTypes =
  | IncrementAction
  | DecrementAction
  | ResetAction;

export interface CounterReducerAction {
  type: CounterActionTypes;
}
