import React from "react";
import axios from "axios";

export default function insertBrewery(id) {
  axios.post('/api/breweries/insert', {
    brewery: id
  });
  console.log("it worked!")
};

