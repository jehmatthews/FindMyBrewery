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
      <div className="message">
        Find a brewery!
        <form className="form" onSubmit={handleSubmit}>
          <label>
            City:
            <input
              type="text"
              className="input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
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
        {breweries.length > 0 ? (
          <ul className="breweries-list">
            {breweries.map((brewery) => (
              <li key={brewery.id}>
                <a href={`/brewery/${brewery.id}`} className="brewery-name">
                  {brewery.name}
                </a>
                <p className="brewery-type">
                  Brewery Type: {brewery.brewery_type}
                </p>
                <p className="brewery-location">
                  Brewery Location: {brewery.street}
                </p>
                <p className="brewery-city">Brewery City: {brewery.city}</p>
                <p className="brewery-state">Brewery State: {brewery.state}</p>
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
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};