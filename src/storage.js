import { createStore } from "redux";
import rootReducer from "./coponent/Services/Reducer/mainreducer";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store