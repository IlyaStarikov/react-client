import {
  LOGIN_RECEIVED,
  LOGIN_REQUESTED,
  LOGIN_REJECTED,
  LOGOUT_CLICKED,
  REGISTRATION_RECEIVED,
  REGISTRATION_REQUESTED,
  REGISTRATION_REJECTED,
} from '../constants';

const initialState = {
  fetching: false,
  isLogin: false,
  error: null,
};

function reducerLogin(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUESTED:
    case REGISTRATION_REQUESTED:
      return { ...state, fetching: true, error: null };
    case LOGIN_RECEIVED:
    case REGISTRATION_RECEIVED:
      return { ...state, fetching: false, isLogin: action.response.message };
    case LOGIN_REJECTED:
    case REGISTRATION_REJECTED:
      return {
        ...state, fetching: false, isLogin: false, error: action.error,
      };
    case LOGOUT_CLICKED:
      return {
        ...state, fetching: false, isLogin: false, error: null,
      };
    default: return state;
  }
}

export default reducerLogin;
