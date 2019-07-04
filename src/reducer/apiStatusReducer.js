const initialState = {
  isFetching: false,
  error: "",
  paperTopic: "New"
};

const apiStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAPER_TOPIC":
      return { ...state, paperTopic: action.paperTopic };
    default:
      return state;
  }
};

export default apiStatusReducer;
