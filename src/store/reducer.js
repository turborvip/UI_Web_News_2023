import {
  SET_SLIDE_IMAGE,
  SET_USERNAME_LOGIN,
  SET_PASSWORD_LOGIN,
  SET_OTP_STATUS,
  SET_ID_USER,
  SET_AUTH_USER,
  DELETE_ACCOUNT,
  EDIT_ACCOUNT,
  ADD_ACCOUNT,
} from "./constants";

import { dataAccount, dataCategory } from "../ApiService";
// import {  } from "../../ApiService/index.js";

const initState = {
  username: "",
  password: "",
  slidesImage: [],
  otpStatus: "",
  otp: "",
  idUser: "",
  auth: 3,
  dataAccount: [...dataAccount],
  dataCategory: [...dataCategory],
};

function reducer(state, action) {
  switch (action.type) {
    case SET_USERNAME_LOGIN:
      return {
        ...state,
        username: action.payload,
      };
    case SET_PASSWORD_LOGIN:
      return {
        ...state,
        password: action.payload,
      };
    case SET_OTP_STATUS:
      return {
        ...state,
        otpStatus: action.payload,
      };
    case SET_ID_USER:
      return {
        ...state,
        idUser: action.payload,
      };
    case SET_SLIDE_IMAGE:
      return {
        slidesImage: [action.payload],
      };
    case SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      };

    //admin
    case ADD_ACCOUNT:
      return {
        ...state,
        dataAccount: action.payload,
      };
    case EDIT_ACCOUNT:
      return {
        ...state,
        dataAccount: action.payload,
      };
    case DELETE_ACCOUNT:
      return {
        ...state,
        dataAccount: action.payload,
      };
    default:
      throw new Error("Invalid actions.");
  }
}

export { initState };
export default reducer;
