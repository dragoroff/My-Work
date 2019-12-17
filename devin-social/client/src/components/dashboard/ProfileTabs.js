import React from "react";
import { Link } from "react-router-dom";

const ProfileTabs = () => {
  return (
    <div className="btn-group mb-4 mt-4" role="group">
      <Link to="/edit-profile" className="btn btn-light mr-4">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
      </Link>
      <Link to="/experience" className="btn btn-light mr-4">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Experience
      </Link>
      <Link to="/education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Education
      </Link>
    </div>
  );
};
export default ProfileTabs;
