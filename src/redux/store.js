import { createStore } from "redux";
import reducer from "./reducer";

// create global store
const store = createStore(reducer);
export default store;