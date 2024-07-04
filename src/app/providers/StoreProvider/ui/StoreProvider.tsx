import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface IStoreProvider {
  children?: ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider = ({ children, initialState }: IStoreProvider) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
