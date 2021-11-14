export const GET_USER_SUCESS = 'GET_USER_SUCESS';
export const SET_USER_NAME = 'SET_USER_NAME';
export const RESET_USER = 'RESET_USER';

export const getUserSucess = (payload) => ({
  type: GET_USER_SUCESS,
  payload,
});

export const setUserName = (payload) => ({
  type: SET_USER_NAME,
  payload,
});

export const resetUser = (payload) => ({
  type: RESET_USER,
  payload,
});
