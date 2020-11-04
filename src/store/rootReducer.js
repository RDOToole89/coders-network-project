import { combineReducers } from "redux";
import feedReducer from "./Feed/feedReducer";
import postPageReducer from "./PostPage/postPageReducer";

const reducer = combineReducers({
  feed: feedReducer,
  postPage: postPageReducer,
});

export default reducer;
