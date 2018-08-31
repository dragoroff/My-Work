import React from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div>
      <p className="lead text-muted">Welcome {props.name}</p>
      <p>You have not yet setup a profile, please add some info</p>
      <Link to="/create-profile" className="btn btn-lg btn-info">
        Create Profile
      </Link>
    </div>
  );
};
