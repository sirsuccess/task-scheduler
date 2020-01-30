import { createStore, combineReducers, applyMiddleware } from "redux";
import taskReducer from "./Reducer/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// const rootReducer = combineReducers({
//   tasks: taskReducer
// });
const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleware);

const storeConfig = () => createStore(taskReducer, enhancer);

export default storeConfig;
