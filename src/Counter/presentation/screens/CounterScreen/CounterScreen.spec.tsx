import React from 'react';
import { render } from '@testing-library/react-native';
import CounterScreen from './CounterScreen';

const state = { count: 10 };
const mockDispatch = jest.fn();
const searchingValue = `O valor do contador é: ${state.count}`;

const setup = () =>
  render(<CounterScreen state={state} dispatch={mockDispatch} />);

describe('<CounterScreen />', () => {
  it('should returns the count state value on interface', () => {
    const { getByText } = setup();
    const element = getByText(searchingValue);
    expect(element).toBeTruthy();
  });
});
