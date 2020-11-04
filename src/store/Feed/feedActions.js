export const startLoading = () => {
  return {
    type: "START_LOADING",
  };
};

export const postsFetched = (morePosts) => {
  return {
    type: "POSTS_FETCHED",
    payload: morePosts,
  };
};
