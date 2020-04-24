import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { editSuccess, confirmSuccess } from './actions';

function* editRecipient({ id }) {
  try {
    const response = yield call(api.get, `recipient/${id}`);

    yield put(editSuccess(response.data));

    history.push('/recipientedit');
  } catch (e) {
    console.tron.log(e.message);
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

    toast.success('Operação efetuada com sucesso.');

    history.push('/recipient');
  } catch (e) {
    console.tron.log(e.message);
  }
}

function* confirmDelete({ payload }) {
  let response = null;
  try {
    const { id } = payload;

    response = yield call(api.delete, `recipient/${id}`);

    yield put(confirmSuccess(payload));

    console.tron.log(response);

    toast.success('Operação efetuada com sucesso.');

    history.push('/recipient');
  } catch (e) {
    console.tron.log(response);
    // toast.error(
    //   response.error(
    //     'Ocorreu um erro ao efetuar a operação efetuada com sucesso.'
    //   )
    // );
  }
}

export default all([
  takeLatest('@recipient/EDIT_REQUEST', editRecipient),
  takeLatest('@recipient/ADD_REQUEST', addRecipient),
  takeLatest('@recipient/APP_CONFIRM_SUCCESS', confirmDelete),
]);
