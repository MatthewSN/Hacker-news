import { AST_Conditional } from "terser";

const initialState = {
  isFetching: true,
  error: "",
  paperTopic: "news"
};

const apiStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAPER_TOPIC":
      return { ...state, paperTopic: action.paperTopic };
    case "SET_IS_FETCHING":
      return { ...state, isFetching: action.isFetching };
    case "SET_ERROR":
     return {...state,error:action.error}
    default:
      return state;
  }
};

export default apiStatusReducer;
