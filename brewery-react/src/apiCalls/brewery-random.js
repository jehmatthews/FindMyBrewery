import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import insertBrewery from "../helpers/insertBrewery";
import '../styles/randomBrewery.scss';

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
            <button
              onClick={() => {
                insertBrewery(brewery.id);
              }}
            >
              Add to Favourites
            </button>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Randomize!
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RandomBrewery;
