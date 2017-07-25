import {
    combineReducers,
    createStore
} from 'redux'

import {
    packsel
} from './reducers'

let store = null;

export const getStore = () => {
    if (store === null) {
        store = createStore(
            combineReducers({
                packsel
            })
        );
    }
    return store;
}
