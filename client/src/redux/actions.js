import { createAction } from 'redux-actions';

import {
  NEWS_REJECTED, NEWS_REQUESTED,
} from './constants';

export const requestNews = createAction(NEWS_REQUESTED);

export const rejectedNews = createAction(NEWS_REJECTED);
