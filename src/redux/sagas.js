import { call, takeLatest, put } from 'redux-saga/effects'
import * as actions from './actions'
import { ACTION_TYPES } from './actions'
import todos from '../model/todos'

function* fetchTodos() {
    const list = yield call(todos.get)
    yield put(actions.readTodosSuccess(list))
}

export default function* () {
    yield takeLatest(ACTION_TYPES.READ_TODOS, fetchTodos);
}