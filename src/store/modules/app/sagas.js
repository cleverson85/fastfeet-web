import { all, takeLatest, call } from 'redux-saga/effects';

function setVisible() {}

function setConfirm() {}

function confirmSuccess() {}

function clearRequest() {}

export default all([
  takeLatest('@app/CLEAR_STATE', clearRequest),
  takeLatest('@button/IS_VISIBLE', setVisible),
  takeLatest('@app/APP_CONFIRM_REQUEST', setConfirm),
  takeLatest('@app/APP_CONFIRM_SUCCESS', confirmSuccess),
]);
