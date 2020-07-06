export function addRequest({ id, recipient_id, deliveryman_id, product }) {
  return {
    type: '@order/ADD_REQUEST',
    payload: { id, recipient_id, deliveryman_id, product },
  };
}

export function editRequest(id) {
  return {
    type: '@order/EDIT_REQUEST',
    id,
  };
}

export function editSuccess(payload) {
  return {
    type: '@order/EDIT_SUCCESS',
    payload,
  };
}

export function confirmSuccess(payload) {
  return {
    type: '@app/APP_CONFIRM_SUCCESS',
    payload,
  };
}

export function SetDeliveryMan(id) {
  return {
    type: '@order/SET_DELIVERYMAN',
    payload: { deliveryManId: id },
  };
}

export function SetRecipient(id) {
  return {
    type: '@order/SET_RECIPIENT',
    payload: { recipientId: id },
  };
}

export function SetProduct(name) {
  return {
    type: '@order/SET_PRODUCT',
    payload: { product: name },
  };
}
