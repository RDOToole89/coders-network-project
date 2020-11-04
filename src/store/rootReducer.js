import { combineReducers } from "redux";
import SomeFeatureReducer from "./SomeFeatureReducer/SomeFeatureReducer";

const reducer = combineReducers({
  someFeature: SomeFeatureReducer,
});

export default reducer;
