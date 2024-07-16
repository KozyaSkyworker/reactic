import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function renderComponent(component: ReactNode, initialState: Partial<StateSchema>) {
  return (
    <BrowserRouter>
      <StoreProvider initialState={initialState}>{component}</StoreProvider>
    </BrowserRouter>
  );
}
