const NAMESPACE = 'CORE';

export const ACTION_TYPES = {
    ADD: `${NAMESPACE}/ADD`,
    TOGGLE: `${NAMESPACE}/TOGGLE`,
    DELETE: `${NAMESPACE}/DELETE`,
    ADD_REQUEST: `${NAMESPACE}/ADD_REQUEST`,
    TOGGLE_REQUEST: `${NAMESPACE}/TOGGLE_REQUEST`,
    DELETE_REQUEST: `${NAMESPACE}/DELETE_REQUEST`,
    READ_TODOS: `${NAMESPACE}/READ_TODOS`,
    TODOS_RECEIVED: `${NAMESPACE}/TODOS_RECEIVED`,
    LOGIN_REQUEST: `${NAMESPACE}/LOGIN_REQUEST`,
    LOGIN_REQUEST_SUCCESS: `${NAMESPACE}/LOGIN_REQUEST_SUCCESS`,
    LOGIN_REQUEST_ERROR: `${NAMESPACE}/LOGIN_REQUEST_ERROR`,
    LOGOUT: `${NAMESPACE}/LOGOUT`
};

export const add = value => ({type:ACTION_TYPES.ADD, payload: value})
export const toggle = index => ({type:ACTION_TYPES.TOGGLE, payload: index})
export const deleteItem = index => ({type:ACTION_TYPES.DELETE, payload: index})
export const todosReceived = list => ({type:ACTION_TYPES.TODOS_RECEIVED, payload: list})
export const toggleRequest = index => ({type:ACTION_TYPES.TOGGLE_REQUEST, payload: index})
export const deleteRequest = index => ({type:ACTION_TYPES.DELETE_REQUEST, payload: index}) 
export const addRequest = value => ({type:ACTION_TYPES.ADD_REQUEST, payload: value}) 
export const readTodos = () => ({type:ACTION_TYPES.READ_TODOS})
export const loginRequest = (username, password) => ({type:ACTION_TYPES.LOGIN_REQUEST, payload:{username, password}})
export const loginRequestSuccess = user => ({type:ACTION_TYPES.LOGIN_REQUEST_SUCCESS, payload: user})
export const loginRequestError = error => ({type:ACTION_TYPES.LOGIN_REQUEST_ERROR, payload: error})
export const logout = () => ({type:ACTION_TYPES.LOGOUT})
