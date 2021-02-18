import React, { Component } from "react";

class Country extends Component {
    // constructor(){       //Only needed for function
    //     super();         //if just rendering you do not need to setState just use props
    //     this.state = {   // need constructor for managing states
    //         country: 0   // with => does not need to be bound to constructor and have state
    //     }                // without => does need
    // }
    // //Funtions
    // increaseCountry = () => {
    //     this.setState({ country: this.state.country + 1 });
    // }

    // decreaseCountry = () => {
    //     this.setState({ country: this.state.country - 1 });
    // }

    render() {
      return (
        <div>
          {this.props.name}
        </div>
      );
    }
  }
  
  export default Country;