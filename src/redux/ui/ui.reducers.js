import { ACTION_TYPES } from './ui.actions';

const INITIAL_STATE = {
    loading: false
};

const reducers = {};

reducers[ACTION_TYPES.START_LOADING] = (state) => {
    return {
        ...state,
        loading: true
    }
}

reducers[ACTION_TYPES.STOP_LOADING] = (state) => {
    return {
        ...state,
        loading: false
    }
}


export default (state = INITIAL_STATE, action) => {
    const reducer = reducers[action.type] || (() => state);
    return reducer(state,action)
}