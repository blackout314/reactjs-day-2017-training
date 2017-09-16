import { call, takeLatest, put, select } from 'redux-saga/effects';
import * as coreActions from '../core/core.actions';
import { ACTION_TYPES } from './ui.actions';
import ons from 'onsenui';

let navigator

export const setNavigator = n => { navigator = n }

function* pushPage(action) {
    yield call(() => navigator.pushPage(action.payload.route, action.payload.options))
}

function* popPage(action) {
    yield call(() => navigator.popPage(action.payload.options))
}

function* resetPage(action) {
    yield call(() => navigator.resetPage(action.payload.route, action.payload.options))
}

function* askDeleteteTodo(action) {
    const element = yield select(state => state.core.list[action.payload]);

    const params = {
        message: `Do you want to remove ${element.value}?`
    };

    const confirmed = yield call(ons.notification.confirm, params);
    if (!confirmed) {
        return
    }

    yield put(coreActions.deleteRequest(action.payload));
}

export default function* () {
    yield takeLatest(ACTION_TYPES.ASK_DELETE, askDeleteteTodo);
    yield takeLatest(ACTION_TYPES.PUSH_PAGE, pushPage);
    yield takeLatest(ACTION_TYPES.POP_PAGE, popPage);
    yield takeLatest(ACTION_TYPES.RESET_PAGE, resetPage);
}