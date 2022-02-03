import {
  LOGIN_RECEIVED,
  LOGIN_REQUESTED,
  LOGIN_REJECTED,
} from '../constants';

const initialState = {
  fetching: false,
  isLogin: false,
  error: null,
};

function reducerLogin(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      return { ...state, fetching: true, error: null };
    case LOGIN_RECEIVED:
      return { ...state, fetching: false, isLogin: action.response.message };
    case LOGIN_REJECTED:
      return {
        ...state, fetching: false, isLogin: false, error: action.error,
      };
    default: return state;
  }
}

export default reducerLogin;
