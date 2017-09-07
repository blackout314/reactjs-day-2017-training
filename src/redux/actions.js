export const ACTION_TYPES = {
    ADD:'ADD',
    TOGGLE:'TOGGLE',
    DELETE:'DELETE'
};

export const add = value => ({type:ACTION_TYPES.ADD, payload: value})

export const toggle = index => ({type:ACTION_TYPES.TOGGLE, payload: index})

export const deleteItem = index => ({type:ACTION_TYPES.DELETE, payload: index})