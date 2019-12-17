import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { isEmpty } from "../validation/is-empty";
import request from "superagent";
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL
} from "../utils/cloudKeys";

// Register User
export const registerUser = (userData, history) => dispatch => {
  if (!isEmpty(userData.image)) {
    const upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", userData.image);

    upload.end((err, response) => {
      if (err) {
        console.log(err);
      }
      if (response.body.secure_url !== "") {
        // Send request to server to change user's avatar
        userData.avatar = response.body.secure_url;

        axios
          .post("/api/users/register", userData)
          .then(() => history.push("/login"))
          .catch(err =>
            dispatch({
              type: "GET_ERRORS",
              payload: err.response.data
            })
          );
      }
    });
  } else {
    axios
      .post("/api/users/register", userData)
      .then(() => history.push("/login"))
      .catch(err =>
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        })
      );
  }
};

// Login - Token

export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to local storage
      console.log("Response data", res);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      //Set token to Auth header

      setAuthToken(token);

      //Decode token to get user data
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    );
};

//Set current user action
export const setCurrentUser = decoded => {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded
  };
};

// Log out

export const logoutUser = history => dispatch => {
  try {
    localStorage.removeItem("jwtToken");

    setAuthToken(false);

    dispatch(setCurrentUser({}));
  } catch (err) {
    history.push("/login");
  }
};
