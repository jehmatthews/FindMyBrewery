import React from 'react';
import Navigation from './Navigation';
import { useState } from "react";
import axios from "axios";
import '../styles/home.scss';

export default function BreweryFilter() {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [breweries, setBreweries] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://api.openbrewerydb.org/breweries?by_city=${city}&by_state=${state}&by_country=${country}`
      )
      .then((response) => setBreweries(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <Navigation />
        <div className="intro-text">
          <h1 className="intro-heading">Welcome to FindMyBrewery</h1>
          <p className="intro-paragraph">Enter a city, state, or country to find breweries near you.</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label style={{ marginRight: '10px' }}>
            City:
            <input
              type="text"
              className="input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              style={{ paddingLeft: '10px' }}
            />
          </label>
          <label>
            State:
            <input
              type="text"
              className="input"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </label>
          <label>
            Country:
            <input
              type="text"
              className="input"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </label>
          <button type="submit" className="button">
            Search 🍺
          </button>
        </form>
        <div className="breweries-grid">
          {breweries.length > 0 ? (
            breweries.map((brewery) => (
              <div key={brewery.id} className="brewery-card">
                <a href={`/brewery/${brewery.id}`} className="brewery-name">
                  {brewery.name}
                </a>
                <p className="brewery-location">
                  Brewery Location: {brewery.street}, {brewery.city}, {brewery.state}
                </p>
                <p className="brewery-phone">
                  Brewery Phone #: <a href={`tel:${brewery.phone}`}>{brewery.phone}</a>
                </p>
                {brewery.website_url ? (
                  <p className="brewery-website">
                    Brewery Website:{" "}
                    <a href={brewery.website_url} target="_blank" rel="noreferrer">
                      {brewery.name}
                    </a>
                  </p>
                ) : (
                  <p className="brewery-website">
                    Brewery Website:{" "}
                    <a href={brewery.website_url} target="_blank" rel="noreferrer">
                      Website Unavailable
                    </a>
                  </p>
                )}
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>

      </div>
  );
};