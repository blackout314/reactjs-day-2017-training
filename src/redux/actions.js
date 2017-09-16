export const ACTION_TYPES = {
    ADD:'ADD',
    TOGGLE:'TOGGLE',
    DELETE:'DELETE',
    READ_TODOS: 'READ_TODOS',
    READ_TODOS_SUCCESS: 'READ_TODOS_SUCCESS'
};

export const add = value => ({type:ACTION_TYPES.ADD, payload: value})

export const toggle = index => ({type:ACTION_TYPES.TOGGLE, payload: index})

export const deleteItem = index => ({type:ACTION_TYPES.DELETE, payload: index})

export const readTodos = () => ({type:ACTION_TYPES.READ_TODOS})

export const readTodosSuccess = list => ({type:ACTION_TYPES.READ_TODOS_SUCCESS, payload: list})