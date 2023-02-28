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

export const setSlideImage = (payload) => ({
  type: SET_SLIDE_IMAGE,
  payload,
});
export const setUsernameLogin = (payload) => ({
  type: SET_USERNAME_LOGIN,
  payload,
});

export const setPasswordLogin = (payload) => ({
  type: SET_PASSWORD_LOGIN,
  payload,
});

export const setOTPStatus = (payload) => ({
  type: SET_OTP_STATUS,
  payload,
});

export const setIdUser = (payload) => ({
  type: SET_ID_USER,
  payload,
});
export const setAuthUser = (payload) => ({
  type: SET_AUTH_USER,
  payload,
});

export const addAccount = (payload) => ({
  type: ADD_ACCOUNT,
  payload,
});
export const editAccount = (payload) => ({
  type: EDIT_ACCOUNT,
  payload,
});
export const deleteAccount = (payload) => ({
  type: DELETE_ACCOUNT,
  payload,
});
