import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
  const dispatch = useDispatch();

  const counterValue = useSelector(getCounterValue);

  const onIncrementClick = () => {
    dispatch(counterActions.increment());
  };
  const onDecrementClick = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className="counter">
      <span data-testid="counter-test">{counterValue}</span>
      <button data-testid="counter-incr" onClick={onIncrementClick}>
        +
      </button>
      <button data-testid="counter-decr" onClick={onDecrementClick}>
        -
      </button>
    </div>
  );
};
