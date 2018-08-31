import React, { Component } from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeAuth } from '../actions/index';

class App extends Component{
  renderButton = () => {
  if (this.props.auth){
    return <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
  } else {
    return <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
  }
  };
  renderHeader = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/post">Post A Comment</Link>
      </li>
      <li>{this.renderButton()}</li>
    </ul>
  );

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route exact path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps, { changeAuth })(App);
