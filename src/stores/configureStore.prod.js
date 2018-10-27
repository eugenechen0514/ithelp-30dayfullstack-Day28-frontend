import { createStore } from 'redux';
import RootReducer from '../reducers/RootReducer';

export function configureStore(initialState) {
    const store = createStore(
        RootReducer,
        initialState,
    );
    return store;
}
