import { ACTION_TYPES } from './ui.actions';

const INITIAL_STATE = {
    loading: false,
    username: undefined,
    password: undefined
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

reducers[ACTION_TYPES.ON_CHANGE_USERNAME] = (state, action) => {
    return {
        ...state,
        username: action.payload
    }
}

reducers[ACTION_TYPES.ON_CHANGE_PASSWORD] = (state, action) => {
    return {
        ...state,
        password: action.payload
    }
}

export default (state = INITIAL_STATE, action) => {
    const reducer = reducers[action.type] || (() => state);
    return reducer(state,action)
}