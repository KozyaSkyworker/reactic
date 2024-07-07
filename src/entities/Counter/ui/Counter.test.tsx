import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Counter } from './Counter';
import { renderComponent } from 'shared/lib/testsComponents/renderComponent';
import userEvent from '@testing-library/user-event';

describe('test Counter', () => {
  test('counter exists with initial value', () => {
    render(renderComponent(<Counter />, { counter: { value: 9 } }));

    const span = screen.getByTestId('counter-test');

    expect(span).toHaveTextContent('9');
  });

  test('counter value change', async () => {
    // render(
    //   <StoreProvider initialState={{ counter: { value: 9 } }}>
    //     <Counter />
    //   </StoreProvider>,
    // );

    render(renderComponent(<Counter />, { counter: { value: 9 } }));

    const incrBtn = screen.getByTestId('counter-incr');
    const decrBtn = screen.getByTestId('counter-decr');
    const span = screen.getByTestId('counter-test');

    await userEvent.click(incrBtn);
    expect(span).toHaveTextContent('10');

    await userEvent.click(decrBtn);
    await userEvent.click(decrBtn);

    expect(span).toHaveTextContent('8');
  });
});
