import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import eventReducer from './event_reducer';
const rootReducer = combineReducers({
  posts: postsReducer,
  event: eventReducer
});

export default rootReducer;
