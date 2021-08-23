export const ADD_DATA = (payload) => {
  return {
    type: "ADD_USER",
    payload,
  };
};

export const USER_NAME = (payload) => {
  return {
    type: "ADD_USERNAME",
    payload,
  };
};

export const USER_AGE = (payload) => {
  return {
    type: "ADD_USERAGE",
    payload,
  };
};

export const USER_GENDER = (payload) => {
  return {
    type: "ADD_USERGENDER",
    payload,
  };
};
