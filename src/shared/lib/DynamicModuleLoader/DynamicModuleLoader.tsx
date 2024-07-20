import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider';
import { FC, ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';

export type ReducresList = {
  [name in StateSchemaKey]?: Reducer;
};

export type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducresList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { reducers, removeAfterUnmount, children } = props;

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      store.reducerManager.add(name as StateSchemaKey, reducer);
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name, reducer]) => {
          store.reducerManager.remove(name as StateSchemaKey);
        });
      }
    };
    // eslint-disable-next-line
  }, []);

  return <>{children}</>;
};
