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

export function confirmSuccess(payload) {
  return {
    type: '@app/CONFIRM_SUCCESS',
    payload,
  };
}
