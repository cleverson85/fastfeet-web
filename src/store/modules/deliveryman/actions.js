export function addRequest({ id, name, email, avatar_id }) {
  return {
    type: '@deliveryMan/ADD_REQUEST',
    payload: { id, name, email, avatar_id },
  };
}

export function editRequest(id) {
  return {
    type: '@deliveryMan/EDIT_REQUEST',
    id,
  };
}

export function editSuccess(payload) {
  return {
    type: '@deliveryMan/EDIT_SUCCESS',
    payload,
  };
}

export function confirmRequest(open, id, messageConfirm, path) {
  return {
    type: '@app/APP_CONFIRM_REQUEST',
    payload: { open, id, messageConfirm, path },
  };
}

export function confirmSuccess(payload) {
  return {
    type: '@app/APP_CONFIRM_SUCCESS',
    payload,
  };
}
