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

export function viewModalRequest(openModal, description, type, order) {
  return {
    type: '@app/VIEW_MODAL_REQUEST',
    payload: { openModal, description, type, order },
  };
}

export function reload(value) {
  return {
    type: '@app/RELOAD',
    payload: { value },
  };
}

export function confirmRequest(open, id, messageConfirm, path) {
  return {
    type: '@app/APP_CONFIRM_REQUEST',
    payload: { open, id, messageConfirm, path },
  };
}

export function confirmSucess(id, path) {
  switch (path) {
    case '/deliverymanedit':
      return {
        type: '@deliveryman/APP_CONFIRM_SUCCESS',
        payload: { id },
      };

    case '/recipientedit':
      return {
        type: '@recipient/APP_CONFIRM_SUCCESS',
        payload: { id },
      };

    case '/orderedit':
      return {
        type: '@order/APP_CONFIRM_SUCCESS',
        payload: { id },
      };

    case '/cancel':
      return {
        type: '@order/CANCEL_SUCCESS',
        payload: { id },
      };

    default:
      return {
        type: '@app/APP_CONFIRM_SUCCESS',
        payload: { id },
      };
  }
}
