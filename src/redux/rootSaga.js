import { all, spawn, call } from 'redux-saga/effects';
import {authenticateSagas} from './modules/authenticate';
import {tasksSagas} from './modules/tasks';

export default function* rootSaga() {
    const sagas = [
        authenticateSagas,
        tasksSagas
    ];

    yield all(sagas.map(saga => spawn(function* () {
        while (true) {
            try {
                yield call(saga);
                break;
            } catch (e) {
                console.log('saga error:', e);
            }
        }
    }))
    );
}
