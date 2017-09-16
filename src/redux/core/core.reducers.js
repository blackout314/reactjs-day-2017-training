import { ACTION_TYPES } from './core.actions';

const INITIAL_STATE = {
    list: []
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

export default (state = INITIAL_STATE, action) => {
    const reducer = reducers[action.type] || (() => state);
    return reducer(state,action)
}