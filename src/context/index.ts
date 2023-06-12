// Services
import { interceptor } from 'api/interceptor'

import userReducer from './features/user'

import { Action, AnyAction, combineReducers, configureStore, Reducer, ThunkAction } from '@reduxjs/toolkit'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage/session'


const appReducer = combineReducers({
  user: userReducer
})

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
  if (action.type === 'user/logout') {
    storage.removeItem('persist:root')
    state = { settings: { ...state.settings } } as RootState
  }

  return appReducer(state, action)
}

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

interceptor(store)

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
