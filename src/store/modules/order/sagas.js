import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { editSuccess, confirmSuccess } from './actions';

function* editOrder({ id }) {
  try {
    const response = yield call(api.get, `recipient/${id}`);

    yield put(editSuccess(response.data));

    history.push('/recipientedit');
  } catch (e) {
    console.tron.log(e.message);
  }
}

function* addOrder({ payload }) {
  try {
    const { id } = payload;
    let response = null;

    payload.cep = payload.cep.replace('-', '');

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

function setDeliveryManId() {}

export default all([
  takeLatest('@order/EDIT_REQUEST', editOrder),
  takeLatest('@order/ADD_REQUEST', addOrder),
  takeLatest('@order/SET_DELIVERYMAN', setDeliveryManId),
  takeLatest('@app/APP_CONFIRM_SUCCESS', confirmDelete),
]);
