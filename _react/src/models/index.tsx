import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import homeReducers from './home/reducers';

const store = createStore(
    combineReducers({
        home: homeReducers,
    }),
    applyMiddleware(thunk),
);

export default store;
