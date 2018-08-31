import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  
  render() {
    const comment = this.props.comments.map(comment => (
      <li key={comment}>{comment}</li>
    ));
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{comment}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);
