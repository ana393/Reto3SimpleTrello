import { createStore } from "redux";
import rootReducer from "../Redux";

const store = createStore(rootReducer);
store.getState();

export default store;
