import React from "react";
import logo from "./logo.svg";
import { connect } from "react-redux";
import "./App.css";
import {fetchData}  from "./actions/fetchData" 
import DropDown from "./components/materialUi/DropDown"
import NavBar from "./components/materialUi/NavBar";
import PaperSheet from "./components/materialUi/PaperSheet"
import { dispatch } from "C:/Users/matin/AppData/Local/Microsoft/TypeScript/3.3/node_modules/rxjs/internal/observable/range";

function App({dispatch}) {
  dispatch(fetchData("news",1))
  return (
    <div className="App">
      <NavBar />
      <DropDown />
      <PaperSheet />
      
    </div>
  );
}

export default connect()(App);;
