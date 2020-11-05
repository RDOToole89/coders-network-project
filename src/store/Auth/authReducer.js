const initialState = {
  me: null,
  accessToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      // console.log("WHAT's INSIDE USER_LOGGED_IN PAYLOAD?", action.payload);
      return {
        ...state,
        me: action.payload.userProfile,
        accessToken: action.payload.token,
      };
    }
    case "LOGIN_USER_FROM_KEY": {
      // console.log("WHAT IS ACTIONPAYLOAD FROM LOGIN_USER_FROM_KEY", action.payload);
      return {
        ...state,
        me: JSON.parse(action.payload.userProfile),
        accessToken: action.payload.userKey,
      };
    }
    case "USER_LOGGED_OUT": {
      return {
        ...state,
        me: null,
        accessToken: null,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
