import CounterMain from './CounterMain';
import { renderHook } from '@testing-library/react-hooks';

describe('<CounterMain />', () => {
  it('should verify if exists a state prop and count initial value', () => {
    const { result } = renderHook(() => CounterMain());
    const countValue = result.current.props.state.count;

    expect(countValue).toEqual(0);
  });
});
