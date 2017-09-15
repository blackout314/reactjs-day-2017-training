export const ACTION_TYPES = {
    START_LOADING: 'START_LOADING',
    STOP_LOADING: 'STOP_LOADING',
    ADD:'ADD',
    TOGGLE:'TOGGLE',
    DELETE:'DELETE',
    ADD_REQUEST:'ADD_REQUEST',
    TOGGLE_REQUEST:'TOGGLE_REQUEST',
    DELETE_REQUEST:'DELETE_REQUEST',
    READ_TODOS: 'READ_TODOS',
    TODOS_RECEIVED: 'TODOS_RECEIVED'
};

export const add = value => ({type:ACTION_TYPES.ADD, payload: value})
export const toggle = index => ({type:ACTION_TYPES.TOGGLE, payload: index})
export const deleteItem = index => ({type:ACTION_TYPES.DELETE, payload: index})
export const todosReceived = list => ({type:ACTION_TYPES.TODOS_RECEIVED, payload: list})
export const toggleRequest = index => ({type:ACTION_TYPES.TOGGLE_REQUEST, payload: index})
export const deleteRequest = index => ({type:ACTION_TYPES.DELETE_REQUEST, payload: index}) 
export const addRequest = value => ({type:ACTION_TYPES.ADD_REQUEST, payload: value}) 
export const readTodos = () => ({type:ACTION_TYPES.READ_TODOS})
export const startLoading = () => ({type:ACTION_TYPES.START_LOADING})
export const stopLoading = () => ({type:ACTION_TYPES.STOP_LOADING})
