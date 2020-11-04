const initialState = {
  loading: false,
  singlePost: {},
  comments: [],
};

const postPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING_PAGE": {
      return {
        ...state,
        loading: true,
      };
    }
    case "STOP_LOADING_PAGE": {
      return {
        ...state,
        loading: false,
      };
    }
    case "POST_FETCHED": {
      console.log("WHAT IS THE PAYLOAD?", action.payload);
      return {
        ...state,
        loading: false,
        singlePost: { ...action.payload.singlePost },
        comments: [...action.payload.postComments],
      };
    }
    default: {
      return state;
    }
  }
};

export default postPageReducer;
