import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { editSuccess, confirmSuccess } from './actions';

function* addOrder({ payload }) {
  try {
    const { id } = payload;
    let response = null;

    if (id) {
      response = yield call(api.put, 'order', payload);
    } else {
      response = yield call(api.post, 'order', payload);
    }

    toast.success('Operação efetuada com sucesso.');

    history.push('/order');
  } catch (e) {
    console.tron.log(e.message);
  }
}

function* editOrder({ id }) {
  try {
    const response = yield call(api.get, `recipient/${id}`);

    yield put(editSuccess(response.data));

    history.push('/orderedit');
  } catch (e) {
    console.tron.log(e.message);
  }
}

function* confirmDelete({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `order/${id}`);

    yield put(confirmSuccess(payload));

    toast.success('Operação efetuada com sucesso.');

    history.push('/order');
  } catch (e) {
    toast.error('Ocorreu um erro ao efetuar a operação efetuada com sucesso.');
  }
}

function setOrder() {}

export default all([
  takeLatest('@order/EDIT_REQUEST', editOrder),
  takeLatest('@order/ADD_REQUEST', addOrder),
  takeLatest('@order/SET_DELIVERYMAN', setOrder),
  takeLatest('@order/SET_RECIPIENT', setOrder),
  takeLatest('@app/APP_CONFIRM_SUCCESS', confirmDelete),
]);
