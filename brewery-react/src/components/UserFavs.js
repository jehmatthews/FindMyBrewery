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
      {favourites.map((favourite) => (
        <div key={favourite.id} className="brewery-card">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${favourite.image_url})` }}
          >
            <div className="card-details">
              <h4>
                <a href={`/brewery/${favourite.id}/favourites`}>{favourite.name}</a>
              </h4>
              <p>Brewery Location: {favourite.street}</p>
              <p>Brewery City: {favourite.city}</p>
              <p>Brewery State: {favourite.state}</p>
              <p>
                Brewery Phone #:{" "}
                <a href={`tel:${favourite.phone}`}>{favourite.phone}</a>
              </p>
              <p>
                Website:{" "}
                <a href={favourite.website_url}>{favourite.website_url}</a>
              </p>
              <button
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
  );
}
