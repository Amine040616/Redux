import {createStore} from 'redux';
import {tdlstReducer} from './reducers/tdlstReducer';

export const store = createStore(
    tdlstReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)