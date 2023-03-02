import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";

function BreweryList(props) {
  const [breweries, setBreweries] = useState([]);

  const onSubmit = function () {};
  useEffect(() => {
    axios
      .get("https://api.openbrewerydb.org/breweries?per_page=5")
      .then((response) => setBreweries(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Navigation />
      <h1>Breweries</h1>
      <ul>
        {breweries.map((brewery) => (
          <li key={brewery.id}>
            {brewery.name}
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
                  Website Unavailable :(
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BreweryList;
