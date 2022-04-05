import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {appReducer} from "../components/c0-app/appReducer";

export const appRootReducer = combineReducers({
    app:appReducer
})

export const store = createStore(appRootReducer, applyMiddleware(thunk));

export type AppRootReducerType = typeof appRootReducer;
export type AppRootStateType = ReturnType<AppRootReducerType>;

// @ts-ignore
window.store = store;