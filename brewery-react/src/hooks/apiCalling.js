import React, { Component } from 'react';
import axios from 'axios';

class BreweryInfo extends Component {
  state = {
    brewery: {}
  };

  componentDidMount() {
    axios.get('https://api.openbrewerydb.org/breweries/10-56-brewing-company-knox')
      .then(response => {
        this.setState({ brewery: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { brewery } = this.state;

    return (
      <div>
        <h1>{brewery.name}</h1>
        <p>{brewery.city}</p>
        <p>{brewery.state}</p>
      </div>
    );
  }
}

export default BreweryInfo;

