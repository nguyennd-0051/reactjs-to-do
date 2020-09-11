import { all, spawn, call } from 'redux-saga/effects';
import {authenticateSagas} from './modules/authenticate';

export default function* rootSaga() {
    const sagas = [
        authenticateSagas
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
