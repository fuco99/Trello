import React, { Component } from "react";
import "./App.scss";

import AppBar from "components/AppBar/AppBar";
import BoardBar from "components/BoardBar/BoardBar";
import BoardContent from "components/BoardContent/BoardContent";

export default class App extends Component {
  render() {
    return (
      <div className="trello-container">
        <AppBar />
        <BoardBar />
        <BoardContent />
      </div>
    );
  }
}
