import { call, takeLatest, put, takeEvery } from 'redux-saga/effects';
import * as actions from './actions';
import { ACTION_TYPES } from './actions';
import todos from '../model/todos';

function* fetchTodos() {
    const list = yield call(todos.get);
    yield put(actions.todosReceived(list));
}

function* addTodo(action) {
    const list = yield call(todos.add, action.payload);
    yield put(actions.todosReceived(list))
}

function* toggleTodo(action) {
    const list = yield call(todos.toggle, action.payload)
    yield put(actions.todosReceived(list))
}

function* deleteTodo(action) {
    const list = yield call(todos.delete, action.payload)
    yield put(actions.todosReceived(list))
}

export default function* () {
    yield takeLatest(ACTION_TYPES.READ_TODOS, fetchTodos);
    yield takeEvery(ACTION_TYPES.ADD_REQUEST, addTodo);
    yield takeEvery(ACTION_TYPES.DELETE_REQUEST, deleteTodo);
    yield takeEvery(ACTION_TYPES.TOGGLE_REQUEST, toggleTodo);
}