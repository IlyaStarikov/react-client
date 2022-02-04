import {
  LOGIN_RECEIVED,
  LOGIN_REQUESTED,
  LOGIN_REJECTED,
  LOGOUT_REQUESTED,
} from '../constants';

const initialState = {
  fetching: false,
  isLogin: false,
  error: null,
};

function reducerAuth(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return { ...state, fetching: true, error: null };
    case LOGIN_RECEIVED:
      return { ...state, fetching: false, isLogin: true };
    case LOGIN_REJECTED:
      return {
        ...state, fetching: false, isLogin: false, error: action.error,
      };
    case LOGOUT_REQUESTED:
      return {
        ...state, fetching: false, isLogin: false, error: null,
      };
    default: return state;
  }
}

export default reducerAuth;
