import produce from 'immer';

const INITIAL_STATE = {
  visible: false,
  open: false,
  id: null,
  messageConfirm: '',
  path: '',
  reload: false,
  openModal: false,
  description: '',
  type: '',
  order: null,
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
        draft.path = action.payload.path;
        break;
      }

      case '@app/APP_CONFIRM_SUCCESS': {
        draft.open = false;
        draft.id = null;
        draft.messageConfirm = '';
        draft.path = '';
        draft.reload = true;
        break;
      }

      case '@app/RELOAD': {
        draft.reload = action.payload.value;
        break;
      }

      case '@app/VIEW_MODAL_REQUEST': {
        draft.openModal = action.payload.openModal;
        draft.description = action.payload.description;
        draft.type = action.payload.type;
        draft.order = action.payload.order;
        break;
      }

      default:
    }
  });
}
