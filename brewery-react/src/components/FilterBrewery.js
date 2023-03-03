import { useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

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
    <div>
      <Navigation />
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <br />
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <br />
        <label>
          Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Filter Breweries</button>
      </form>
      {breweries.length > 0 ? (
        <ul>
          {breweries.map((brewery) => (
            <li key={brewery.id}>
              <a href={`/brewery/${brewery.id}`}>{brewery.name}</a>
              <p>Brewery Type: {brewery.brewery_type}</p>
              <p>Brewery Location: {brewery.street}</p>
              <p>Brewery City: {brewery.city}</p>
              <p>Brewery State: {brewery.state}</p>
              <p>
                Brewery Phone #:
                <a href="tel:"> {brewery.phone}</a>
              </p>
              {brewery.website_url ? (
                <p>
                  Brewery Website:
                  <a target="_blank" href={brewery.website_url}>
                    {" "}
                    {brewery.name}
                  </a>
                </p>
              ) : (
                <p>
                  Brewery Website:
                  <a target="_blank" href={brewery.website_url}>
                    {" "}
                    Website Unavailable
                  </a>
                </p>
              )}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
