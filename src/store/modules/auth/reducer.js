import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@login/AUTH_SUCCESS': {
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.signed = true;
      });
    }

    case '@login/LOG_OUT': {
      return produce(state, (draft) => {
        draft.token = null;
        draft.signed = false;
      });
    }

    default:
      return state;
  }
}
