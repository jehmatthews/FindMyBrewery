import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { useLocation, useParams } from "react-router-dom";
import insertBrewery from "../helpers/insertBrewery";
import "../styles/singlebrewery.scss";
import CommentsPage from "../components/Comments";

function SingleBreweryFav(props) {
  const params = useParams();
  const paramsID = params.id;
  const [brewery, setBreweries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/${paramsID}`)
      .then((reponse) => setBreweries(reponse.data))
      .catch((error) => console.log(error));
  }, []);

  const breweryAddress =
    brewery.street +
    ", " +
    brewery.city +
    ", " +
    brewery.state +
    " " +
    brewery.postal_code;

  return (
    <div className="single-container">
      <Navigation />
      <div className="brewery-card">
        <h1 className="brewery-name">{brewery.name}</h1>
        <ul className="brewery-details">
          <li className="brewery-location">
            <span className="label">Address:</span> {brewery.street},{" "}
            {brewery.city}, {brewery.state}
          </li>
          <li className="brewery-phone">
            <span className="label">Phone:</span>{" "}
            <a href={`tel:${brewery.phone}`}>{brewery.phone}</a>
          </li>
          <li className="brewery-website">
            <span className="label">Website:</span>
            {brewery.website_url ? (
              <a
                className="website-link"
                target="_blank"
                href={brewery.website_url}
              >
                {brewery.name}
              </a>
            ) : (
              <span className="website-unavailable">Website Unavailable</span>
            )}
          </li>
          <li className="add-to-favorites">
            <button className="add-to-favorites-button" onClick={() => {}}>
              <a  className="add-to-favorites-anchor" href="/breweries/favourites">Added to Favourites</a>
            </button>
            <button className="address-button">
              <a
                className="address-anchor"
                target="_blank"
                href={`http://maps.google.com/?q=${breweryAddress}`}
              >
                Get Directions
              </a>
            </button>
            <CommentsPage
            id = {paramsID}
             />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SingleBreweryFav;
