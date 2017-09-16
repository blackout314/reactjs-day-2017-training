import { ACTION_TYPES } from './core.actions';

const INITIAL_STATE = {
    list: [],
    user: undefined,
    loginError: undefined
};

const reducers = {};

reducers[ACTION_TYPES.ADD] = (state, action) => {

    const value = action.payload;

    return {
        ...state,
        list: [...state.list, {
            value,
            checked: false
        }]
    };
}

reducers[ACTION_TYPES.DELETE] = (state, action) => {
    const toDelete = action.payload;
    return {
        ...state,
        list: state.list.filter((todo, index) => index !== toDelete)
    };
}

reducers[ACTION_TYPES.TOGGLE] = (state, action) => {
    const index = action.payload;
    const list = [...state.list];
    
    list[index] = {
        ...list[index],
        checked: !list[index].checked
    };

    return {
        ...state,
        list
    }
}

reducers[ACTION_TYPES.TODOS_RECEIVED] = (state, action) => {
    return {
        ...state,
        list:[...action.payload]
    }
}

reducers[ACTION_TYPES.LOGIN_REQUEST_SUCCESS] = (state, action) => {
    return {
        ...state,
        user:action.payload,
        loginError: undefined
    }
}

reducers[ACTION_TYPES.LOGIN_REQUEST_ERROR] = (state, action) => {
    console.log(action.payload.message)
    return {
        ...state,
        user: undefined,
        loginError: action.payload.message
    }
}

reducers[ACTION_TYPES.LOGOUT] = (state, action) => {
    return {
        ...state,
        user: undefined
    }
}

export default (state = INITIAL_STATE, action) => {
    const reducer = reducers[action.type] || (() => state);
    return reducer(state,action)
}