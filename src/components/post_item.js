import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PostItem extends Component {

  render() {
    //console.log(this.props);
    return (
      <ul className="list-group">
      <li className="list-group-item list-group-item-success">{this.props.post.name}</li>
        <li className="list-group-item list-group-item-info">{this.props.post.currentPlace}</li>
        <li className="list-group-item list-group-item-warning">{this.props.post.admin}</li>
        <li className="list-group-item list-group-item-danger">{this.props.post.goingCounter}</li>
        </ul>

    );
  }
}

export default connect(null, actions)(PostItem);
