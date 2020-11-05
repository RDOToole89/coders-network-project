import { combineReducers } from "redux";
import authReducer from "./Auth/authReducer";
import feedReducer from "./Feed/feedReducer";
import postPageReducer from "./PostPage/postPageReducer";

const reducer = combineReducers({
  feed: feedReducer,
  postPage: postPageReducer,
  auth: authReducer,
});

export default reducer;
