import axios from "axios";

export const userLoggedIn = (token, userProfile) => {
  console.log("INSIDE USERLOGGED IN ?");
  return {
    type: "USER_LOGGED_IN",
    payload: { token, userProfile },
  };
};

export const userLoggedOut = () => {
  console.log("INSIDE USER LOGGED OUT!");
  return {
    type: "USER_LOGGED_OUT",
  };
};

export const loginUserFromKey = (userKey) => {
  return {
    type: "LOGIN_USER_FROM_KEY",
    payload: userKey,
  };
};

export const bootstrapLoginState = (userKey, userProfile) => (dispatch, getState) => {
  console.log("WHATS IN LOCALSTORAGE", localStorage);
  console.log("USERKEY is: ", localStorage.getItem("JWTKEY"));

  dispatch(loginUserFromKey({ userKey, userProfile }));
};

export const login = (email, password) => async (dispatch, getState) => {
  try {
    const loginResponse = await axios.post(
      `https://codaisseur-coders-network.herokuapp.com/login`,
      { email: "kelley@codaisseur.com", password: "abcd" }
    );

    const token = loginResponse.data.jwt;

    const userProfile = await axios.get(`https://codaisseur-coders-network.herokuapp.com/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // console.log("UserProfile", userProfile);
    // console.log("LoginResponse", loginResponse.data.jwt);
    dispatch(userLoggedIn(token, userProfile.data));

    if (loginResponse && userProfile) {
      localStorage.setItem("JWTKEY", token);

      localStorage.setItem("USERPROFILE", JSON.stringify(userProfile.data));

      // localStorage.setItem("USERPROFILE", JSON.stringify(userProfile.data));
    }
  } catch (e) {
    console.log(e.message);
  }
};

export const logout = () => async (dispatch, getState) => {
  // console.log("WHAT IS THE STATE", getState());
  localStorage.removeItem("JWTKEY");
  localStorage.removeItem("USERPROFILE");
  dispatch(userLoggedOut());
};
