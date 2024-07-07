import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReactNode } from 'react';

export function renderComponent(component: ReactNode, initialState: StateSchema) {
  return <StoreProvider initialState={initialState}>{component}</StoreProvider>;
}
