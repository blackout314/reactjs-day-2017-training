import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects';
import * as actions from './actions';
import { ACTION_TYPES } from './actions';
import todos from '../model/todos';
import ons from 'onsenui';

function* fetchTodos() {
    try{
        yield put(actions.startLoading());
        const list = yield call(todos.get);
        yield put(actions.todosReceived(list));
    }catch(e){
        yield call(ons.notification.alert, 'Error during network communicaton');
    }finally{
        yield put(actions.stopLoading());
    }
}

function* addTodo(action) {
    const oldList = yield select(state => state.list)
    try{
        yield put(actions.startLoading());
        yield put(actions.add(action.payload))
        yield call(todos.add, action.payload);
    }catch(e){
        yield put(actions.todosReceived(oldList));
        yield call(ons.notification.alert, 'Error during network communicaton');
    }finally{
        yield put(actions.stopLoading());
    }
}

function* toggleTodo(action) {
    const oldList = yield select(state => state.list)
    try{
        yield put(actions.startLoading());
        yield put(actions.toggle(action.payload));
        yield call(todos.toggle, action.payload);
    }catch(e){
        yield put(actions.todosReceived(oldList));
        yield call(ons.notification.alert, 'Error during network communicaton');
    }finally{
        yield put(actions.stopLoading());
    }
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

    const oldList = yield select(state => state.list)
    try{
        yield put(actions.startLoading());
        yield put(actions.deleteItem(action.payload));
        yield call(todos.delete, action.payload);
    }catch(e){
        yield put(actions.todosReceived(oldList));
        yield call(ons.notification.alert, 'Error during network communicaton');
    }finally{
        yield put(actions.stopLoading());
    }
}

export default function* () {
    yield takeLatest(ACTION_TYPES.READ_TODOS, fetchTodos);
    yield takeEvery(ACTION_TYPES.ADD_REQUEST, addTodo);
    yield takeEvery(ACTION_TYPES.DELETE_REQUEST, deleteTodo);
    yield takeEvery(ACTION_TYPES.TOGGLE_REQUEST, toggleTodo);
}