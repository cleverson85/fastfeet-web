import { all, takeLatest, put, call } from 'redux-saga/effects';

function setVisible() {}

function confirmRequest() {}

function confirmSuccess() {}

function clearRequest() {}

function reload() {}

export default all([
  takeLatest('@app/CLEAR_STATE', clearRequest),
  takeLatest('@button/IS_VISIBLE', setVisible),
  takeLatest('@app/APP_CONFIRM_REQUEST', confirmRequest),
  takeLatest('@app/APP_CONFIRM_SUCCESS', confirmSuccess),
  takeLatest('@app/RELOAD', reload),
]);
