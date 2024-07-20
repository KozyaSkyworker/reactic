import { configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { apiAxiosInstance } from 'shared/api/api'
import { To, NavigateOptions } from 'react-router-dom'

export function createReduxStore(initialState?: StateSchema, 
    asyncReducers?: ReducersMapObject<StateSchema>, 
    navigate?: (to: To, options?: NavigateOptions) => void) {


    const rootReducer: ReducersMapObject<StateSchema> ={
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore<StateSchema>({
        // @ts-expect-error idk how to fix it
        reducer: reducerManager.reduce,
        devTools: false,
        preloadedState: initialState,
        // @ts-expect-error idk how to fix it
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: apiAxiosInstance,
                    navigate
                }
            }
        })
    })

    // @ts-expect-error test
    store.reducerManager = reducerManager

    return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
