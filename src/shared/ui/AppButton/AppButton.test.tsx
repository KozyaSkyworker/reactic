import AppButton, { ThemeButton } from 'shared/ui/AppButton/AppButton';
import { render, screen } from '@testing-library/react';

describe('button', () => {
  test('test render btn with text', () => {
    render(<AppButton>Hello</AppButton>);
    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });

  test('test btn with class', () => {
    render(<AppButton theme={ThemeButton.CLEAR}>123</AppButton>);
    expect(screen.getByText('123')).toHaveClass('clear');
    // screen.debug();
  });
});
