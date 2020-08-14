/* eslint-disable no-param-reassign */
import produce from 'immer';

const INITIAL_STATE = {
  authChecked: false,
  token: null,
  signed: false,
  loading: false,
  user: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/LOGIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/LOGIN_SUCCESS': {
        draft.loading = false;
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.signed = true;
        break;
      }
      case '@auth/LOGIN_FAIL': {
        draft.loading = false;
        break;
      }
      case '@auth/LOGOUT': {
        draft.token = null;
        draft.user = null;
        draft.signed = false;
        break;
      }
      case '@auth/REGISTER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/REGISTER_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/REGISTER_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
