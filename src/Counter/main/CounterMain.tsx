import React, { useEffect, useReducer } from 'react';
import { counterReducer, INITIAL_STATE } from '../adapter';
import CounterScreen from '../presentation/screens/CounterScreen/CounterScreen';
import { CounterActionTypes } from '../types/counter-reducer.types';

export default function CounterMain() {
  const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({ type: CounterActionTypes.RESET });
  }, []);

  return <CounterScreen state={state} dispatch={dispatch} />;
}
