export function addRequest({ id, product, recipient_id, deliveryMan_id }) {
  return {
    type: '@order/ADD_REQUEST',
    payload: {
      id,
      product,
      recipient_id,
      deliveryMan_id,
    },
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
    type: '@app/CONFIRM_SUCCESS',
    payload,
  };
}

export function SetDeliveryMan({ id }) {
  return {
    type: '@order/SET_DELIVERYMAN',
    payload: { deliveryManId: id },
  };
}

export function SetRecipient({ id }) {
  return {
    type: '@order/SET_DELIVERYMAN',
    payload: { recipientId: id },
  };
}
