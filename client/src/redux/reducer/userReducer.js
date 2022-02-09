import {
  USER_RECEIVED,
  USER_REQUESTED,
  USER_REJECTED,
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
    default:
      return state;
  }
}

export default reducerUser;
