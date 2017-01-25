import _ from 'lodash';
import {
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
    //console.log( action);
    return action.payload;
    }

  return state;
}
