import axios from "axios";
import { API_URL } from "../../config";

export const startLoadingPost = () => {
  return {
    type: "START_LOADING_PAGE",
  };
};

export const stopLoadingPost = () => {
  return {
    type: "STOP_LOADING_PAGE",
  };
};

export const postFetched = (postObject) => {
  return {
    type: "POST_FETCHED",
    payload: postObject,
  };
};

export const fetchPostsWithComments = (postId) => async (dispatch, getState) => {
  dispatch(startLoadingPost());
  console.log("IS THERE A POSTSID?", postId);

  try {
    const post = await axios.get(`${API_URL}/posts/${postId}`);
    const comments = await axios.get(`${API_URL}/posts/${postId}/comments`);
    console.log("INCOMING COMMENTS", comments.data.rows);
    console.log("INCOMING FETCHED POST", post.data);

    const singlePost = post.data;
    const postComments = comments.data.rows;

    dispatch(postFetched({ singlePost, postComments }));
  } catch (e) {
    console.log(e.message);
  }
};
