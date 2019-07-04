const initialState = [
  {
    id: "",
    tile: "",
    url: ""
  }
];

const newsReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_NEWS":
    return action.news
    default:
      return state;
  }
};

export default newsReducer;
