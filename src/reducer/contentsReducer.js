const initialState = [
  {
    id: "",
    tile: "",
    url: ""
  }
];

const contentsReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_TOPIC_CONTENTS":
    return action.topicContents
    default:
      return state;
  }
};

export default contentsReducer;
