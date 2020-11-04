export const selectPostPageLoading = (reduxState) => {
  return reduxState.postPage.loading;
};

export const selectSpecificPost = (reduxState) => {
  return reduxState.postPage.singlePost;
};

export const selectSpecificPostComments = (reduxState) => {
  return reduxState.postPage.comments;
};

export const selectPostWithComments = (reduxState) => {
  if (reduxState.postPage.loading) {
    return null;
  }
  return reduxState.postPage;
};
