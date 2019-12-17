import axios from "axios";

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: "GET_PROFILE",
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: "GET_PROFILE",
        payload: {}
      })
    );
};

// Get profile by handle
export const getProfileByHandle = handle => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`/api/profile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: "GET_PROFILE",
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: "GET_PROFILE",
        payload: null
      })
    );
};

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile/all")
    .then(res =>
      dispatch({
        type: "GET_PROFILES",
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: "GET_PROFILES",
        payload: null
      })
    );
};

//Creating Profile

export const createProfile = (data, history) => dispatch => {
  axios
    .post("/api/profile", data)
    .then(() => history.push("/dashboard"))
    .catch(err => {
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      });
    });
};

// Adding Experience

export const AddExperienceAction = (data, history) => dispatch => {
  axios
    .post("api/profile/experience", data)
    .then(() => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    );
};

// Deleting Experience

export const deleteExperience = id => dispatch => {
  axios
    .delete(`api/profile/experience/${id}`)
    .then(res =>
      dispatch({
        type: "GET_PROFILE",
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.payload.data
      })
    );
};

// Adding Education

export const AddEducationAction = (data, history) => dispatch => {
  axios
    .post("api/profile/education", data)
    .then(() => history.push("/dashboard"))
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    );
};

// Deleting Experience

export const deleteEducation = id => dispatch => {
  axios
    .delete(`api/profile/education/${id}`)
    .then(res =>
      dispatch({
        type: "GET_PROFILE",
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.payload.data
      })
    );
};

//Deleting Profile

export const deleteProfile = () => dispatch => {
  // TODO: modal window from bootstrap
  if (
    window.confirm(
      "Are you sure that you want to delete your account? There is no way back..."
    )
  ) {
    axios
      .delete("/api/profile")
      .then(res => {
        dispatch({
          type: "SET_CURRENT_USER",
          payload: {}
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        });
      });
  }
};
// Profile loading

export const setProfileLoading = () => {
  return {
    type: "SET_PROFILE_LOADING"
  };
};

export const clearCurrentProfile = () => {
  return {
    type: "CLEAR_CURRENT_PROFILE"
  };
};
