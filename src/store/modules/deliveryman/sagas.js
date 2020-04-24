import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { editSuccess, confirmSuccess } from './actions';

function* editDeliveryMan({ id }) {
  try {
    const response = yield call(api.get, `deliveryman/${id}`);

    yield put(editSuccess(response.data));

    history.push('/deliverymanedit');
  } catch (e) {
    console.tron.log(e.message);
  }
}

function* addDeliveryMan({ payload }) {
  try {
    const { id } = payload;
    let response = null;

    if (id > 0) {
      response = yield call(api.put, 'deliveryman', payload);
    } else {
      response = yield call(api.post, 'deliveryman', payload);
    }

    toast.success('Operação efetuada com sucesso.');

    history.push('/deliveryman');
  } catch (e) {
    console.tron.log(e.message);
  }
}

function* confirmDelete({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `deliveryman/${id}`);

    yield put(confirmSuccess(payload));

    toast.success('Operação efetuada com sucesso.');

    history.push('/deliveryman');
  } catch (e) {
    toast.error('Ocorreu um erro ao efetuar a operação efetuada com sucesso.');
  }
}

export default all([
  takeLatest('@deliveryMan/EDIT_REQUEST', editDeliveryMan),
  takeLatest('@deliveryMan/ADD_REQUEST', addDeliveryMan),
  takeLatest('@deliveryman/APP_CONFIRM_SUCCESS', confirmDelete),
]);
