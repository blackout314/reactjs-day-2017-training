import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects';
import * as actions from './actions';
import { ACTION_TYPES } from './actions';
import todos from '../model/todos';
import ons from 'onsenui';

function* fetchTodos() {
    yield put(actions.startLoading());
    const list = yield call(todos.get);
    yield put(actions.todosReceived(list));
    yield put(actions.stopLoading());
}

function* addTodo(action) {
    yield put(actions.startLoading());
    const list = yield call(todos.add, action.payload);
    yield put(actions.todosReceived(list));
    yield put(actions.stopLoading());
}

function* toggleTodo(action) {
    yield put(actions.startLoading());
    const list = yield call(todos.toggle, action.payload);
    yield put(actions.todosReceived(list));
    yield put(actions.stopLoading());
}

function* deleteTodo(action) {
    yield put(actions.startLoading());
    const element = yield select(state => state.list[action.payload]);
    
    const params = {
        message: `Do you want to remove ${element.value}?`
    };

    const confirmed = yield call(ons.notification.confirm, params);
    if(!confirmed){
        return
    }

    const list = yield call(todos.delete, action.payload);
    yield put(actions.todosReceived(list));
    yield put(actions.stopLoading());
}

export default function* () {
    yield takeLatest(ACTION_TYPES.READ_TODOS, fetchTodos);
    yield takeEvery(ACTION_TYPES.ADD_REQUEST, addTodo);
    yield takeEvery(ACTION_TYPES.DELETE_REQUEST, deleteTodo);
    yield takeEvery(ACTION_TYPES.TOGGLE_REQUEST, toggleTodo);
}