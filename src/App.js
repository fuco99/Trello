import React, { Component } from "react";
import image1 from "./assets/pexels-photo-5912200.jpeg";
import "./App.scss";

export default class App extends Component {
  render() {
    return (
      <div className="trello-container">
        <nav className="navbar app">App Bar</nav>
        <nav className="navbar board">Board Bar</nav>
        <div className="board-columns">
          <div className="column">
            <header>Brainstorm</header>
            <ul>
              <li>
                <img src={image1} alt="image1" />
                <p>Title: leuleu</p>
              </li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
          <div className="column">
            <header>Brainstorm</header>
            <ul>
              <li>
                <img src={image1} alt="image1" />
                <p>Title: leuleu</p>
              </li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
          <div className="column">
            <header>Brainstorm</header>
            <ul>
              <li>
                <img src={image1} alt="image1" />
                <p>Title: leuleu</p>
              </li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
          <div className="column">
            <header>Brainstorm</header>
            <ul>
              <li>
                <img src={image1} alt="image1" />
                <p>Title: leuleu</p>
              </li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
          <div className="column">
            <header>Brainstorm</header>
            <ul>
              <li>
                <img src={image1} alt="image1" />
                <p>Title: leuleu</p>
              </li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
          <div className="column">
            <header>Brainstorm</header>
            <ul>
              <li>
                <img src={image1} alt="image1" />
                <p>Title: leuleu</p>
              </li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
              <li>Add what you'd like to work on below</li>
            </ul>
            <footer>Add another card</footer>
          </div>
        </div>
      </div>
    );
  }
}
