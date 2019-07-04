import { setTopicContens } from "./contentsActions";
import { setIsFetching, setError } from "./statusActions";

export const fetchData = (item, page) => {
  const request = fetch(`https://api.hnpwa.com/v0/${item}/${page}.json`);

  return dispatch => {
    dispatch(setIsFetching(false));
    request
      .then(data => {
        return data.json();
      })
      .then(data => {
        const contents = data.map((item, index) => {
          const { url, id, title } = item;
          return {
            id,
            title,
            url
          };
        });
        dispatch(setTopicContens(contents));
      })
      .catch(err => {
        dispatch(setError("Can't get the data"))
      });
  };
};
