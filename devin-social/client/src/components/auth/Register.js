import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/forms/TextFieldGroup";
import Dropzone from "react-dropzone";
import { isEmpty } from "../../validation/is-empty";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      image: "",
      preview: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      image: this.state.image
    };

    this.props.registerUser(newUser, this.props.history);
  };

  handleDrop = files => {
    console.log(files);
    this.setState({
      image: files[0],
      preview: files[0].preview
    });
  };

  render() {
    const { errors } = this.props;

    return (
      <div className="wrapper">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Sign Up</h1>
            <p className="lead text-center">Create your DevIn account</p>
            <form noValidate onSubmit={this.onSubmit}>
              <TextFieldGroup
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                error={errors.name}
              />
              <TextFieldGroup
                placeholder="Email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.onChange}
                error={errors.email}
                info="This site uses Gravatar so use a Gravatar email and you will get a profile image automatically"
              />
              <TextFieldGroup
                placeholder="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.onChange}
                error={errors.password}
              />
              <TextFieldGroup
                placeholder="Confirm Password"
                name="password2"
                type="password"
                value={this.state.password2}
                onChange={this.onChange}
                error={errors.password2}
              />
              <Dropzone
                onDrop={this.handleDrop.bind(this)}
                multiple={false}
                accept={"image/*"}
              >
                {!isEmpty(this.state.preview) ? (
                  <img
                    src={this.state.preview}
                    alt="Something"
                    style={{ height: "200px" }}
                  />
                ) : (
                  <p className="lead text-center mt-5">
                    Drop your photo or click here to upload
                  </p>
                )}
              </Dropzone>
              <small className="text-muted">
                You can choose your profile avatar manually, if you don't have
                gravatar account
              </small>
              <div>
                <input type="submit" className="btn btn-info mt-4" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
