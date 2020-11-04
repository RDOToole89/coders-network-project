import { combineReducers } from "redux";
import feedReducer from "./Feed/feedReducer";

const reducer = combineReducers({
  feed: feedReducer,
});

export default reducer;
