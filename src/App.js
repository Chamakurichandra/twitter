import React, { Component } from 'react';
import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import Search from "./components/Search";
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
        <div className="col-3">
        <Home/>
        </div>
        <div className="col" > 
      <Main/>
        </div>
        <div className="col-4">
        <Search/>
        </div>
        </div>
      </div>
    )
  }
}
