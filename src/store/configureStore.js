import { createStore, combineReducers, applyMiddleware } from "redux";
import newsReducer from "../reducer/newsReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = middleware => {
  const store = createStore(
    combineReducers({
      newsReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
