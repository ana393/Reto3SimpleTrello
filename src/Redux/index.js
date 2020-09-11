import { combineReducers } from "redux";
import listsReducer from "./reducer";

export default combineReducers({
  lists: listsReducer
});
