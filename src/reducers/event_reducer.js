import _ from 'lodash';
import {
  FETCH_POSTS,
  CREATE_POST,
  FETCH_EVENT
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_EVENT:
    console.log( action);
    return action.payload;
    }

  return state;
}
