import produce from 'immer';

const INITIAL_STATE = {
  visible: false,
  open: false,
  id: null,
  messageConfirm: '',
};

export default function app(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@button/IS_VISIBLE': {
        draft.visible = action.payload.visible;
        break;
      }

      case '@app/APP_CONFIRM_REQUEST': {
        draft.open = action.payload.open;
        draft.id = action.payload.id;
        draft.messageConfirm = action.payload.messageConfirm;
        break;
      }

      case '@app/APP_CONFIRM_SUCCESS': {
        draft.open = false;
        draft.id = null;
        draft.messageConfirm = '';
        break;
      }

      default:
    }
  });
}
