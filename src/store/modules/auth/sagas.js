import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { loginSuccess } from './actions';

export function* authLogin({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'session', { email, password });

    const { token, user } = response.data;

    if (!user) {
      toast.error('Usuário não encontrado.');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(loginSuccess(token, user));

    history.push('/dashboard');
  } catch (e) {
    toast.error(`Falha na autenticação, verifique seus dados`);
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function logOut() {
  history.push('/');
}

export default all([
  takeLatest('@login/AUTH_REQUEST', authLogin),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@login/LOG_OUT', logOut),
]);
