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
    <div className="single-container">
      <Navigation />
      <div className="brewery-card">
        <h1 className="brewery-name">Random Brewery!</h1>
        <ul className="brewery-details">
          {breweries.map((brewery) => (
            <li key={brewery.id} className="brewery-details-item">
              <a className="brewery-details-link" href={`/brewery/${brewery.id}`}>{brewery.name}</a>
              <div className="brewery-details-group">
                <span className="brewery-details-label">Location:</span>
                <span className="brewery-details-value">{brewery.street}, {brewery.city}, {brewery.state}</span>
              </div>
              <div className="brewery-details-group">
                <span className="brewery-details-label">Phone:</span>
                <a className="brewery-details-value" href={`tel:${brewery.phone}`}>{brewery.phone}</a>
              </div>
              <div className="brewery-details-group">
                <span className="brewery-details-label">Website:</span>
                {brewery.website_url ? (
                  <a className="brewery-details-link" target="_blank" href={brewery.website_url}>
                    {brewery.name}
                  </a>
                ) : (
                  <span className="brewery-details-unavailable">Website Unavailable</span>
                )}
              </div>
              <div className="brewery-details-group">
                <button className="add-to-favorites-button" onClick={() => { insertBrewery(brewery.id); }}>
                  Add to Favorites
                </button>
                <button className="randomize-button" onClick={() => { window.location.reload(); }}>
                  Randomize!
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
}

export default RandomBrewery;
