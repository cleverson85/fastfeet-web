import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import { editSuccess, confirmRequest, confirmSuccess } from './actions';

function* editDeliveryMan({ id }) {
  try {
    const response = yield call(api.get, `deliveryman/${id}`);

    yield put(editSuccess(response.data));

    history.push('/deliverymanedit');
  } catch (e) {
    toast.warn(e);
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

    const { data } = response;

    if (data.status !== 200) {
      throw data.message;
    }

    toast.success(data.message);

    history.push('/deliveryman');
  } catch (e) {
    toast.warn(e);
  }
}

function* confirmDelete({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `deliveryman/${id}`);

    yield put(confirmSuccess(payload));

    const { data } = response;

    if (data.status !== 200) {
      throw data.message;
    }

    toast.success(data.message);

    history.push('/deliveryman');
  } catch (e) {
    yield put(confirmRequest(false, null, null, null));
    toast.warn(e);
  }
}

export default all([
  takeLatest('@deliveryMan/EDIT_REQUEST', editDeliveryMan),
  takeLatest('@deliveryMan/ADD_REQUEST', addDeliveryMan),
  takeLatest('@deliveryman/APP_CONFIRM_SUCCESS', confirmDelete),
]);
