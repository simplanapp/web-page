import Firebase from 'firebase';
import _ from 'lodash';
import {
  FETCH_POSTS,
  DELETE_POST,
  CREATE_POST,
   FETCH_EVENT
} from './types';
var config = {
    apiKey: "AIzaSyDHXX6SsbLgm9yjkIJXGRR3wpsdpnx_iJU",
    authDomain: "simplan-alpha.firebaseapp.com",
    databaseURL: "https://simplan-alpha.firebaseio.com",
    storageBucket: "simplan-alpha.appspot.com",
    messagingSenderId: "320788806474"
  };

Firebase.initializeApp(config);

const Posts =Firebase.database().ref().child('eventDetails');//.child('-Kah7fzteYMwy0dVT0ge');

export function fetchPosts() {
  return dispatch => {
    Posts.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      });
    });
  };
}
export function fetchEvent(eventId){
  console.log("event fetched");
  return dispatch => {
    if (!eventId ){eventId='-Kah7fzteYMwy0dVT0ge'}
    Posts.child(eventId).on('value', snapshot => {
      dispatch({
        type: FETCH_EVENT,
        payload: snapshot.val()
      });
    });
  };
}



export function deletePost(key) {
  return dispatch => Posts.child(key).remove();
}
