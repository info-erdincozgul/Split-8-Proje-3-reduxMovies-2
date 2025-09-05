import reducer from './reducers';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { logger } from 'redux-logger';
export const myStore = createStore(reducer, applyMiddleware(logger));
