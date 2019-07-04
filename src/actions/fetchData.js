import {setNews} from "./newsActions"

export const fetchData = (item, page) => {
  const request = fetch(`https://api.hnpwa.com/v0/${item}/${page}.json`);
  return dispatch => {
    request
      .then(data => {
        return data.json();
      })
      .then(data => {
        const news = data.map((item, index) => {
          const { url, id, title } = item;
          return {
            id,
            title,
            url
          };
        });
        dispatch(setNews(news))
      });
  };
};
