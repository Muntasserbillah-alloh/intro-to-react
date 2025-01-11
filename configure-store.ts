import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './root-reducer';

function configureAppStore(preloadedState?: any) {
    const store = configureStore({
        reducer: rootReducer,
        preloadedState,
    });
    return store;
}

let store = configureAppStore();
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export default store;