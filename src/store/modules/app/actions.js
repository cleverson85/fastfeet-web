export function clearRequest() {
  return {
    type: '@app/CLEAR_STATE',
  };
}

export function visibleRequest(visible) {
  return {
    type: '@button/IS_VISIBLE',
    payload: { visible },
  };
}

export function confirmRequest(open, id, messageConfirm) {
  return {
    type: '@app/APP_CONFIRM_REQUEST',
    payload: { open, id, messageConfirm },
  };
}

export function confirmSucess(id) {
  return {
    type: '@app/APP_CONFIRM_SUCCESS',
    payload: { id },
  };
}
