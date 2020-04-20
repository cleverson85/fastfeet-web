import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@login/AUTH_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }

      case '@login/LOG_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
