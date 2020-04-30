import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { editSuccess, confirmRequest, confirmSuccess } from './actions';
import CepMask from '~/util/cepMask';

function* editRecipient({ id }) {
  try {
    const response = yield call(api.get, `recipient/${id}`);

    const { cep } = response.data;

    response.data.cep = CepMask(String(cep));

    yield put(editSuccess(response.data));

    history.push('/recipientedit');
  } catch (e) {
    toast.warn(e);
  }
}

function* addRecipient({ payload }) {
  try {
    const { id } = payload;
    let response = null;

    payload.cep = payload.cep.replace('-', '');

    if (id) {
      response = yield call(api.put, 'recipient', payload);
    } else {
      response = yield call(api.post, 'recipient', payload);
    }

    const { data } = response;

    if (data.status !== 200) {
      throw data.message;
    }

    toast.success(data.message);

    history.push('/recipient');
  } catch (e) {
    toast.warn(e);
  }
}

function* confirmDelete({ payload }) {
  let response = null;
  try {
    const { id } = payload;

    response = yield call(api.delete, `recipient/${id}`);

    const { data } = response;

    if (data.status !== 200) {
      throw data.message;
    }

    yield put(confirmSuccess(payload));

    toast.success(data.message);

    history.push('/recipient');
  } catch (e) {
    yield put(confirmRequest(false, null, null, null));
    toast.warn(e);
  }
}

function setLocation() {}

export default all([
  takeLatest('@recipient/EDIT_REQUEST', editRecipient),
  takeLatest('@recipient/ADD_REQUEST', addRecipient),
  takeLatest('@recipient/APP_CONFIRM_SUCCESS', confirmDelete),
  takeLatest('@recipient/LOCATION_REQUEST', setLocation),
]);
