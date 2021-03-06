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

    const { data } = response;

    if (data.status !== 200) {
      throw data.message;
    }

    toast.success(data.message);
    history.push('/order');
  } catch (e) {
    toast.warn(e);
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
    const { data } = response;

    if (data.status !== 200) {
      throw data.message;
    }

    toast.success(data.message);
    history.push('/order');
  } catch (e) {
    toast.warn(e);
  }
}

function* cancelOrder({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.put, `cancelDelivery/${id}/cancel`);

    yield put(confirmSuccess(payload));
    const { data } = response;

    if (data.status !== 200) {
      throw data.message;
    }

    toast.success(data.message);
    history.push('/issues');
  } catch (e) {
    toast.warn(e);
  }
}

function setOrder() {}

function* deliveryOrder({ payload }) {
  try {
    const response = yield call(api.put, `deliveryStart`, payload);

    yield put(confirmSuccess(payload));
    const { data } = response;

    if (data.status !== 200) {
      throw data.message;
    }

    toast.success(data.message);
    history.push('/order');
  } catch (e) {
    toast.warn(e);
  }
}

export default all([
  takeLatest('@order/ADD_REQUEST', addOrder),
  takeLatest('@order/EDIT_REQUEST', editOrder),
  takeLatest('@order/SET_DELIVERYMAN', setOrder),
  takeLatest('@order/SET_RECIPIENT', setOrder),
  takeLatest('@order/APP_CONFIRM_SUCCESS', confirmDelete),
  takeLatest('@order/CANCEL_SUCCESS', cancelOrder),
  takeLatest('@order/DELIVERY_SUCCESS', deliveryOrder),
]);
