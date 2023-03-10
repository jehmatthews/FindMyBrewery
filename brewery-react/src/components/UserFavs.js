import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserFavBreweries() {

  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    axios.get('/api/breweries/favourites')
      .then(response => {
        console.log('response', response)
        setFavourites(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  return (
    <div>
      {favourites.map(favourite => (
        <div key={favourite.id}>
          <p> Brewery Name: {favourite.name}</p>
          <p>Brewery Location: {favourite.street}</p>
          <p>Brewery City: {favourite.city}</p>
          <p>Brewery State: {favourite.state}</p>
          <p>Brewery Phone #: <a href="tel:"> {favourite.phone}</a></p>
          <p>Website: {favourite.website_url}</p>
        </div>
      ))}
    </div>
  )
}