const initialState = {
  loading: false,
  posts: [],
};

const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_LOADING": {
      return {
        ...state,
        loading: true,
      };
    }
    case "POSTS_FETCHED": {
      return {
        loading: false,
        posts: [...state.posts, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};

export default feedReducer;
