import { compose, createStore } from 'redux';
import RootReducer from '../reducers/RootReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configureStore(initialState) {
    const store = createStore(
        RootReducer,
        initialState,
        composeEnhancer()
    );
    return store;
}
