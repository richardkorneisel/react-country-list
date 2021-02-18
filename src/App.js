import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import CountryList from "./CountryList";

class App extends Component {
  constructor() {   // always add constructor and super
    super()

    this.state={
      countries: []         //api data usually in array
    }
  }
// Part of step one
  componentDidMount = () => {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      this.setState({
        countries: response.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Countries of the World</h1>
        <Header 
        increaseCountries={this.increaseCountries}
        decreaseCountries={this.decreaseCountries}
        />
        <CountryList countries = {this.state.countries}/>
      </div>
    );
  }
}

export default App;
