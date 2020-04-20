import produce from 'immer';

const INITIAL_STATE = {
  data: null,
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
        draft.data = action.id;
        break;
      }

      default:
    }
  });
}
