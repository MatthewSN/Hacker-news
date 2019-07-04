const initialState = [
  {
    id: "",
    tile: "",
    url: ""
  }
];

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEWS":
      return [...state, action.news];
    case "SET_NEWS":
    return action.news
    default:
      return state;
  }
};

export default newsReducer;
