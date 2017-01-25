import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
//import PostsIndex from './components/posts_index';
//import PostsNew from './components/posts_new';
//import PostsShow from './components/posts_show';
import EventDetails from './components/eventDetails';
import post_item from './components/post_item';
export default (
  <Route path="/" component={App}>
    <Route path="event/:id" component={EventDetails} />
    <Route path="posts" component={post_item} />
  </Route>
);
