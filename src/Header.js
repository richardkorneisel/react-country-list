import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">Countries</h1>
        <button onClick={this.props.increaseCountry}>+</button>
        <button onClick={this.props.decreaseCountry}>-</button>
      </header>
    );
  }
}

export default Header;
