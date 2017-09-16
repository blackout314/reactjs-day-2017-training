import { call, takeLatest, put, select } from 'redux-saga/effects';
import * as coreActions from '../core/core.actions';
import { ACTION_TYPES } from './ui.actions';
import ons from 'onsenui';

function* askDeleteteTodo(action) {
    const element = yield select(state => state.core.list[action.payload]);
    
    const params = {
        message: `Do you want to remove ${element.value}?`
    };

    const confirmed = yield call(ons.notification.confirm, params);
    if(!confirmed){
        return
    }

    yield put(coreActions.deleteRequest(action.payload));
}

export default function* () {
    yield takeLatest(ACTION_TYPES.ASK_DELETE, askDeleteteTodo);
}