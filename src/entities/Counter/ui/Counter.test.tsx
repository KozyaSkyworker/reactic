import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Counter } from './Counter';
import { StoreProvider } from 'app/providers/StoreProvider';
import userEvent from '@testing-library/user-event';

describe('test Counter', () => {
  test('counter exists with initial value', () => {
    render(
      <StoreProvider initialState={{ counter: { value: 9 } }}>
        <Counter />
      </StoreProvider>,
    );
    const span = screen.getByTestId('counter-test');

    expect(span).toHaveTextContent('9');
  });

  test('counter value change', () => {
    render(
      <StoreProvider initialState={{ counter: { value: 9 } }}>
        <Counter />
      </StoreProvider>,
    );

    const incrBtn = screen.getByTestId('counter-incr');
    const decrBtn = screen.getByTestId('counter-decr');
    const span = screen.getByTestId('counter-test');

    userEvent.click(incrBtn);

    expect(span).toHaveTextContent('10');

    userEvent.click(decrBtn);
    userEvent.click(decrBtn);

    expect(span).toHaveTextContent('8');
  });
});
