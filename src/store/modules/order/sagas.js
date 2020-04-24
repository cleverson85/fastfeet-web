import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { editSuccess, confirmSuccess } from './actions';

function* addOrder({ payload }) {
  try {
    const { id } = payload;
    let response = null;

    if (id > 0) {
      response = yield call(api.put, 'order', payload);
    } else {
      response = yield call(api.post, 'order', payload);
    }

    toast.success('Operação efetuada com sucesso.');

    history.push('/order');
  } catch (e) {
    toast.error('Não foi possível executar a operação.');
  }
}

function* editOrder({ id }) {
  try {
    const response = yield call(api.get, `order/${id}`);

    yield put(editSuccess(response.data));

    history.push('/orderedit');
  } catch (e) {
    toast.error('Não foi possível executar a operação.');
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
    toast.error('Não foi possível executar a operação.');
  }
}

function setOrder() {}

export default all([
  takeLatest('@order/ADD_REQUEST', addOrder),
  takeLatest('@order/EDIT_REQUEST', editOrder),
  takeLatest('@order/SET_DELIVERYMAN', setOrder),
  takeLatest('@order/SET_RECIPIENT', setOrder),
  takeLatest('@order/APP_CONFIRM_SUCCESS', confirmDelete),
]);
