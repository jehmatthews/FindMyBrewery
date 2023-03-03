import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";

function RandomBrewery() {
  const [breweries, setBreweries] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.openbrewerydb.org/breweries/random", {
        headers: { "Cache-Control": "max-age=0" },
      })
      .then((reponse) => setBreweries(reponse.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navigation />
      <h1>Random Brewery!</h1>
      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
            {" "}
            <a href={`/brewery/${brewery.id}`}>{brewery.name}</a>
            <p>Brewery Type: {brewery.brewery_type}</p>
            <p>Brewery Location: {brewery.street}</p>
            <p>Brewery City: {brewery.city}</p>
            <p>Brewery State: {brewery.state}</p>
            <p>
              Brewery Phone #:
              <a href="tel:"> {brewery.phone}</a>
            </p>
            <p>
              Brewery Website:
              <a target="_blank" href={brewery.website_url}>
                {" "}
                {brewery.name}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RandomBrewery;
