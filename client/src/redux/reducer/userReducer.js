import {
  USER_RECEIVED,
  USER_REQUESTED,
  USER_REJECTED,
  USER_UPDATE_REQUESTED,
  USER_UPDATE_REJECTED,
  USER_UPDATE_RECEIVED,
} from '../constants';

const initialState = {
  fetching: false,
  user: {},
  error: null,
  userNews: [],
};

function reducerUser(state = initialState, action = {}) {
  switch (action.type) {
    case USER_RECEIVED:
      return {
        ...state,
        fetching: false,
        user: action.response,
        userNews: action.response.news,
      };
    case USER_REQUESTED:
      return {
        ...state, fetching: true, error: null, userNews: [],
      };
    case USER_REJECTED:
      return {
        ...state, fetching: false, user: null, error: action.error, userNews: [],
      };
    case USER_UPDATE_REQUESTED:
      return {
        ...state, fetching: true, error: null,
      };
    case USER_UPDATE_REJECTED:
      return {
        ...state, fetching: false, error: action.error,
      };
    case USER_UPDATE_RECEIVED:
      return {
        ...state, fetching: false, error: null,
      };
    default:
      return state;
  }
}

export default reducerUser;
