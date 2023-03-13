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
      <div className="randomize-text">
        <h1 className="randomize-heading">Random Brewery</h1>
        <p className="randomize-paragraph">Search for a random brewery, here!</p>
      </div>
      <button className="randomize-button" onClick={() => { window.location.reload(); }}>
        Randomize!
      </button>
      <div className="brewery-card">
        <ul className="brewery-details">
          {breweries.map((brewery) => (
            <li key={brewery.id} className="brewery-details-item">
              <a className="brewery-details-link" href={`/brewery/${brewery.id}`}>{brewery.name}</a>
              <div className="brewery-details-group">
                <span className="brewery-details-label">Location:</span>
                <span className="brewery-details-address">{brewery.street}, {brewery.city}, {brewery.state}</span>
              </div>
              <div className="brewery-details-group">
                <span className="brewery-details-phone">Phone:</span>
                <a className="brewery-details-contact" href={`tel:${brewery.phone}`}>{brewery.phone}</a>
              </div>
              <div className="brewery-details-group">
                <span className="brewery-details-label">Website:</span>
                {brewery.website_url ? (
                  <a className="brewery-details-contact" target="_blank" href={brewery.website_url}>
                    {brewery.name}
                  </a>
                ) : (
                  <span className="brewery-details-unavailable">Website Unavailable</span>
                )}
              </div>
              <div className="brewery-details-group">
                <button className="add-to-favorites-button" onClick={() => { insertBrewery(brewery.id); }}>
                  <a className="fav-button" href="/breweries/favourites">Add to Favourites</a>
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
