import produce from 'immer';

const INITIAL_STATE = {
  data: null,
  order: {
    id: null,
    recipient_id: null,
    deliveryman_id: null,
    product: null,
  },
};

export default function order(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@order/EDIT_SUCCESS': {
        draft.data = action.payload;
        break;
      }

      case '@order/ADD_SUCESS': {
        draft.data = action.payload;
        break;
      }

      case '@app/CLEAR_STATE': {
        draft.data = null;
        break;
      }

      case '@order/SET_DELIVERYMAN': {
        draft.order.deliveryman_id = action.payload.deliveryManId;
        break;
      }

      case '@order/SET_RECIPIENT': {
        draft.order.recipient_id = action.payload.recipientId;
        break;
      }

      case '@order/SET_PRODUCT': {
        draft.order.product = action.payload.product;
        break;
      }

      default:
    }
  });
}
