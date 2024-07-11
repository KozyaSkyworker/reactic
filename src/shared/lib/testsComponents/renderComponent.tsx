import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';

export function renderComponent(component: ReactNode, initialState: Partial<StateSchema>) {
  return <StoreProvider initialState={initialState}>{component}</StoreProvider>;
}
