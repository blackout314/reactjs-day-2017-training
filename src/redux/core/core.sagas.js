import { delay } from 'redux-saga'
import { call, takeLatest, put, takeEvery, select } from 'redux-saga/effects';
import * as coreActions from './core.actions';
import { ACTION_TYPES } from './core.actions';
import * as uiActions from '../ui/ui.actions';
import todos from '../../model/todos';
import ons from 'onsenui';

function* fetchTodos() {
    try{
        yield put(uiActions.startLoading());
        const list = yield call(todos.get);
        yield put(coreActions.todosReceived(list));
    }catch(e){
        yield call(ons.notification.alert, 'Error during network communicaton');
    }finally{
        yield put(uiActions.stopLoading());
    }
}

function* addTodo(action) {
    const oldList = yield select(state => state.core.list)
    try{
        yield put(uiActions.startLoading());
        yield put(coreActions.add(action.payload))
        yield call(todos.add, action.payload);
    }catch(e){
        yield put(coreActions.todosReceived(oldList));
        yield call(ons.notification.alert, 'Error during network communicaton');
    }finally{
        yield put(uiActions.stopLoading());
    }
}

function* toggleTodo(action) {
    const oldList = yield select(state => state.list)

    function* toggleApi(index) {
        const MAX_ATTEMPS = 5
        const REQUEST_DELAY = 2000
        for(let i = 0; i < MAX_ATTEMPS; i++) {
          try {
            const result = yield call(todos.toggle, index);
            return result
          } catch(err) {
            if(i < MAX_ATTEMPS - 1) {
              yield call(delay, REQUEST_DELAY);
            }
          }
        }

        throw new Error('API request failed');
    }

    try{
        yield put(uiActions.startLoading());
        yield put(coreActions.toggle(action.payload));
        yield* toggleApi(action.payload)
    }catch(e){
        yield put(coreActions.todosReceived(oldList));
        yield call(ons.notification.alert, 'Error during network communicaton');
    }finally{
        yield put(uiActions.stopLoading());
    }
}

function* deleteTodo(action) {
    const oldList = yield select(state => state.core.list)
    try{
        yield put(uiActions.startLoading());
        yield put(coreActions.deleteItem(action.payload));
        yield call(todos.delete, action.payload);
    }catch(e){
        yield put(coreActions.todosReceived(oldList));
        yield call(ons.notification.alert, 'Error during network communicaton');
    }finally{
        yield put(uiActions.stopLoading());
    }
}

export default function* () {
    yield takeLatest(ACTION_TYPES.READ_TODOS, fetchTodos);
    yield takeEvery(ACTION_TYPES.ADD_REQUEST, addTodo);
    yield takeEvery(ACTION_TYPES.DELETE_REQUEST, deleteTodo);
    yield takeEvery(ACTION_TYPES.TOGGLE_REQUEST, toggleTodo);
}