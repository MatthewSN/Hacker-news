import { createStore, combineReducers, applyMiddleware } from "redux";
import newsReducer from "../reducer/newsReducer";
import apiStatusReducer from "../reducer/apiStatusReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = middleware => {
  const store = createStore(
    combineReducers({
      newsReducer,
      apiStatusReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
};

export default configureStore;
