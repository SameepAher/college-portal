import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_ADMIN, SET_ERRORS, GET_SUBJECTS } from "../actionTypes";

const url = process.env.REACT_APP_PUBLIC_API_URL;

const setAdmin = (data) => {
  return {
    type: SET_ADMIN,
    payload: data,
  };
};

const adminAddFacultyFlag = (data) => {
  return {
    type: "ADMIN_ADD_FACULTY_FLAG",
    payload: data,
  };
};

const adminAddStudentFlag = (data) => {
  return {
    type: "ADMIN_ADD_STUDENT_FLAG",
    payload: data,
  };
};

const adminAddSubjectFlag = (data) => {
  return {
    type: "ADMIN_ADD_SUBJECT_FLAG",
    payload: data,
  };
};

const adminAddAdminFlag = (data) => {
  return {
    type: "ADMIN_ADD_ADMIN_FLAG",
    payload: data,
  };
};

const getSubjctsHelper = (data) => {
  return {
    type: GET_SUBJECTS,
    payload: data,
  };
};

const adminGetAllFacultyHelper = (data) => {
  return {
    type: "GET_ALL_FACULTY",
    payload: data,
  };
};

const adminGetAllStudentHelper = (data) => {
  return {
    type: "GET_ALL_STUDENT",
    payload: data,
  };
};

const adminGetAllSubjectHelper = (data) => {
  return {
    type: "GET_ALL_SUBJECT",
    payload: data,
  };
};

export const adminLogin = (adminCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: url + "/api/admin/login",
        data: adminCredentials,
      });

      const { token } = data;
      localStorage.setItem("adminJwtToken", token);

      setAuthToken(token);
      const decoded = jwt_decode(token);

      dispatch(setAdmin(decoded));
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

export const adminGetAllSubjects = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Get",
        url: url + "/api/admin/getSubjects",
      });
      dispatch(getSubjctsHelper(data));
    } catch (err) {
      console.log("Error in getting all subjects", err.message);
    }
  };
};

export const adminAddFaculty = (facultyCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: url + "/api/admin/add-faculty",
        data: facultyCredentials,
      });
      dispatch(adminAddFacultyFlag(true));
      alert("Faculty Added Successfully!");
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

export const adminAddStudent = (studentCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: url + "/api/admin/add-student",
        data: studentCredentials,
      });
      dispatch(adminAddStudentFlag(true));
      alert("Student Added Successfully");
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

export const adminAddSubject = (subjectCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: url + "/api/admin/add-subject",
        data: subjectCredentials,
      });
      dispatch(adminAddSubjectFlag(true));
      alert("Subject Added Successfully");
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

export const adminAddAdmin = (adminCredentails) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: url + "/api/admin/add-admin",
        data: adminCredentails,
      });
      dispatch(adminAddAdminFlag(true));
      alert("Admin Added Successfully");
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

export const adminGetAllFaculty = (department) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: url + "/api/admin/get-all-faculty",
        data: department,
      });
      dispatch(adminGetAllFacultyHelper(data.result));
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

export const adminGetAllStudent = (searchCredentials) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: url + "/api/admin/get-all-student",
        data: searchCredentials,
      });

      dispatch(adminGetAllStudentHelper(data.result));
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

export const adminGetAllSubject = (department) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "Post",
        url: url + "/api/admin/get-all-subject",
        data: department,
      });
      dispatch(adminGetAllSubjectHelper(data.result));
    } catch (err) {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    }
  };
};

export const setAdminUser = (data) => {
  return {
    type: SET_ADMIN,
    payload: data,
  };
};

export const adminLogout = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("adminJwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setAdmin({}));
};
