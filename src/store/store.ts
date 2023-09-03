import reduxMiddleware from 'redux-thunk';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import appReducer from './slices/appReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {appService} from './api/appService';

export const rootReducer = combineReducers({
  app: appReducer,
  [appService.reducerPath]: appService.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(reduxMiddleware, appService.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// @ts-ignore
window.store = store;