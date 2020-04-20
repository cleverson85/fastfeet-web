import produce from 'immer';

const INITIAL_STATE = {
  data: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliveryMan/EDIT_SUCCESS': {
        draft.data = action.payload;
        break;
      }

      case '@deliveryMan/ADD_SUCESS': {
        draft.data = action.payload;
        break;
      }

      case '@app/CLEAR_STATE': {
        draft.data = null;
        break;
      }

      default:
    }
  });
}
