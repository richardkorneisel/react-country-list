import React, { Component } from "react";
import Country from "./Country";

class CountryList extends Component {
  render() {
    let list = [];
    const countryList = this.props.countries.map((country, index) => 
        list.push(<Country name={country.name} key={index}/>)
    )
    return (
        <div>
            <h1>CountryList</h1> 
            {list}   
        </div>
    ) 
  }
}

export default CountryList;