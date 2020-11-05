export const selectLoggedInUser = (reduxState) => {
  return reduxState.auth;
};

export const isUserLoggedIn = (reduxState) => {
  return reduxState.auth.accessToken;
};
