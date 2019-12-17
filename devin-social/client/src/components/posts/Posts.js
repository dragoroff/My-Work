import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PostForm from "./PostForm";
import "../common/spinner/Spinner.css";
import { getPosts } from "../../actions/postActions";
import PostFeed from "./PostFeed";
import classnames from "classnames";
import { classNameFunc } from "../common/classNameFunc";

class Posts extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };
  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = (
        <div className="wrapper">
          <div className="spinner" />
        </div>
      );
    } else {
      postContent = <PostFeed posts={posts} />;
    }
    return (
      <div
        className={classnames("", {
          "mt-5": classNameFunc(posts),
          wrapper: !classNameFunc(posts)
        })}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
              <h1 className="display-4 text-center">Post Feed</h1>
              <p className="lead text-center">
                Please feel free to ask any questions, share information e.t.c
              </p>
              {postContent}
              <PostForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
