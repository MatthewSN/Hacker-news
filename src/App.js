import React from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import "./App.css";
import { fetchData } from "./actions/fetchData";
import DropDown from "./components/materialUi/DropDown";
import NavBar from "./components/materialUi/NavBar";
import PaperSheet from "./components/materialUi/PaperSheet";
import { dispatch } from "C:/Users/matin/AppData/Local/Microsoft/TypeScript/3.3/node_modules/rxjs/internal/observable/range";

function App({ dispatch, apiStatus, contents }) {
  const { isFetching, paperTopic, error } = apiStatus;

  function showPapers() {
    if (isFetching) {
      dispatch(fetchData(paperTopic, 1));
    }

    return (
      <div>
        {error || contents.map(item => (
          <PaperSheet key={item.id} title={item.title} url={item.url} />
        ))}
      </div>
    );
  }
  return (
    <div className="App">
      <NavBar />
      <DropDown />
      {showPapers()}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    apiStatus: state.apiStatusReducer,
    contents: state.contentsReducer
  };
};

export default connect(mapStateToProps)(App);
/*
const mapStateToProps = state => {
  console.log("test", state);
  return {
    paperTopic: state.apiStatusReducer.paperTopic,
    news: state.newsReducer
  };
};

export default connect(mapStateToProps)(App);
*/
