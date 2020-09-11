import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import { all, call, takeLatest, put } from 'redux-saga/effects';
import history from '../../routes/history';
import axios from '../../shared/axios';
import handleResponse from '../../shared/handle-response';

export const LOGIN = 'LOGIN';

export const login = createAction(LOGIN);

const authenticateInitialState = fromJS({
    user: localStorage.getItem('user') || {}
})

export default handleActions({
    
}, authenticateInitialState);

export function* authenticateSagas() {
    yield all([
        takeLatest(LOGIN, callLogin),
    ]);
}

function* callLogin(payload) {
    console.log(payload);

}

export function loginApi(params) {
    return axios.post('/api/auth/login', params)
        .then(response => response)
        .catch(error => error.response);
}