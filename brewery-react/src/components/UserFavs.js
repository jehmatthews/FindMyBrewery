import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/userfavs.scss";
import Navigation from "./Navigation";
import deleteBrewery from "../helpers/deleteBrewery";


export default function UserFavBreweries() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios
      .get("/api/breweries/favourites")
      .then((response) => {
        console.log("response", response);
        setFavourites(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="user-fav-breweries">
      <Navigation />
      <div className="favourites-text">
        <h1 className="intro-heading">My Favourites</h1>
        <p className="favourites-paragraph">
          Here is a list of your favourite breweries:
        </p>
      </div>
      <div className="brewery-cards-container">
        {favourites.map((favourite) => (
          <div key={favourite.id} className="brewery-card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${favourite.image_url})` }}
            >
              <div className="card-details">
                <h4>
                  <a
                    className="brewery-title"
                    href={`/brewery/${favourite.id}/favourites`}
                  >
                    {favourite.name}
                  </a>
                </h4>
                <p>
                  Brewery Location: {favourite.street}, {favourite.city},{" "}
                  {favourite.state}
                </p>
                <p>
                  Brewery Phone #:{" "}
                  <a className="phone-link" href={`tel:${favourite.phone}`}>
                    {favourite.phone}
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a className="website-link" href={favourite.website_url}>
                    {favourite.website_url}
                  </a>
                </p>

                <button className="find-address">
                  <a
                    target="_blank"
                    href={`http://maps.google.com/?q=${
                      favourite.street +
                      ", " +
                      favourite.city +
                      ", " +
                      favourite.state +
                      " " +
                      favourite.postal_code
                    }`}
                  >
                    <i className="fas fa-map-marker-alt" style={{ color: 'red' }}></i>
                    Find Address
                  </a>
                </button>

                <button className="delete-fav"
                  onClick={() => {
                    deleteBrewery(favourite.id);
                  }}
                >
                  Delete Brewery
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
