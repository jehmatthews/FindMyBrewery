import { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { useLocation, useParams } from "react-router-dom";


function SingleBrewery(props) {
  const params = useParams();
  const paramsID = params.id;
  const [brewery, setBreweries] = useState([]);


  useEffect(() => {
    axios
      .get(`https://api.openbrewerydb.org/breweries/${paramsID}`)
      .then((reponse) => setBreweries(reponse.data))
      .catch((error) => console.log(error));
  }, []);

  const insertBrewery = () => {
    axios.post('/api/breweries/insert', {
      brewery: paramsID
    });
    console.log("it worked!")
};

  return (
    <div>
      <Navigation />
      <ul>
        <h1>{brewery.name}</h1>

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
        <button onClick={() => {insertBrewery()}}>Add to Favourites</button>
      </ul>
    </div>
  );
}

export default SingleBrewery;
