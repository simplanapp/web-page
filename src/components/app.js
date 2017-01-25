import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PostItem from './post_item';
import EventDetails from './eventDetails';

class App extends Component {
  state = { post: '' ,
            event: ''};

  componentWillMount() {
      this.props.fetchPosts();
  }



renderEvent() {

    return <EventDetails props={this.props}/>

}

  renderPosts() {
    //console.log(this.props);
    return _.map(this.props.posts, (name, eventId ,admin ,goingCounter, currentPlace) => {
    //  console.log(this);
     //console.log(currentPlace);
      return <PostItem key={eventId} post={name} id={eventId} going={goingCounter} place ={currentPlace} />
    });
  }

  render() {
    //console.log(this.props.posts);
    return (
      <div className="full">
        <h4>SIMPLAN EVENTS</h4>
        {this.props.children}




      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts,
            event: state.event};
}

export default connect(mapStateToProps, actions)(App)
