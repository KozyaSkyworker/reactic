import { fireEvent, render, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/testsComponents/renderComponent';
import { SideBar } from 'widgets/SideBar/ui/SideBar';

describe('sidebar', () => {
  test('sidebar exists', () => {
    render(renderComponent(<SideBar />, { user: {} }));
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument();
  });

  test('sidebar toggle', () => {
    render(renderComponent(<SideBar />, { user: {} }));
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('sidebar_open');
  });
});
