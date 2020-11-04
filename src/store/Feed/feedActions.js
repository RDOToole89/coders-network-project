import axios from "axios";
import { API_URL } from "../../config";

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

export const fetchNext5Posts = async (dispatch, getState) => {
  dispatch(startLoading());

  const offset = getState().feed.posts.length;

  try {
    const response = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);
    console.log("INCOMING 5 FETCHED POSTS", response.data);

    const morePosts = response.data.rows;

    dispatch(postsFetched(morePosts));
  } catch (e) {
    console.log(e);
  }
};
