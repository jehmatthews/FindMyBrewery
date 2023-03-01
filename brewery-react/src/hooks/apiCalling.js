import { useState, useEffect } from "react";
import axios from 'axios';


const nameHere = function() {
axios.get(`https://api.openbrewerydb.org/breweries/10-56-brewing-company-knox`)
.then(function(response) {
  console.log('hello')
  console.log(response)
  return (
    <p>
      {response.name}
    </p>
  )
  })
  console.log('hello test')

}

export default nameHere;



