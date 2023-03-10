import axios from "axios";

export default function deleteBrewery(id) {
  axios.post('/api/breweries/delete', {
    brewery: id
  });
  window.location.reload();
  console.log("deleted!")
};