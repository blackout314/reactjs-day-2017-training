import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects';
import * as actions from './actions';
import { ACTION_TYPES } from './actions';
import todos from '../model/todos';
import ons from 'onsenui';

function* basicRestSaga(generator) {
    try{
        yield put(actions.startLoading());
        yield* generator();
    }catch(e){
        yield call(ons.notification.alert, 'Error during network communicaton');
    }finally{
        yield put(actions.stopLoading());
    }
}

function* fetchTodos() {
    yield* basicRestSaga(function* () {
        const list = yield call(todos.get);
        yield put(actions.todosReceived(list));
    });
}

function* addTodo(action) {
    yield* basicRestSaga(function* () {
        const list = yield call(todos.add, action.payload);
        yield put(actions.todosReceived(list));
    });
}

function* toggleTodo(action) {
    yield* basicRestSaga(function* () {
        const list = yield call(todos.toggle, action.payload);
        yield put(actions.todosReceived(list));
    });
}

function* deleteTodo(action) {
    const element = yield select(state => state.list[action.payload]);
    
    const params = {
        message: `Do you want to remove ${element.value}?`
    };

    const confirmed = yield call(ons.notification.confirm, params);
    if(!confirmed){
        return
    }

    yield* basicRestSaga(function* () {
        const list = yield call(todos.delete, action.payload);
        yield put(actions.todosReceived(list));
    });
}

export default function* () {
    yield takeLatest(ACTION_TYPES.READ_TODOS, fetchTodos);
    yield takeEvery(ACTION_TYPES.ADD_REQUEST, addTodo);
    yield takeEvery(ACTION_TYPES.DELETE_REQUEST, deleteTodo);
    yield takeEvery(ACTION_TYPES.TOGGLE_REQUEST, toggleTodo);
}