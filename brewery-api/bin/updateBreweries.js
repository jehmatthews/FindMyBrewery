const fetch = require('node-fetch');
require('dotenv').config();
const fs = require('fs');

// Retrieve data from the Open Brewery DB API
for (let i = 1; i <= 163; i++) {
  fetch(process.env.API_URL + `?per_page=50&page=${i}`)
    .then(response => response.json())
    .then(data => {
      // Insert the data into the breweries table
      const values = data.map(brewery => `(
            '${brewery.name ? brewery.name.replace(/'/g, "''") : null}', 
            '${brewery.street ? brewery.street.replace(/'/g, "''") : null}', 
            '${brewery.city ? brewery.city.replace(/'/g, "''") : null}', 
            '${brewery.state ? brewery.state.replace(/'/g, "''") : null}', 
            '${brewery.postal_code ? brewery.postal_code.replace(/'/g, "''") : null}', 
            '${brewery.country ? brewery.country.replace(/'/g, "''") : null}', 
            '${brewery.phone ? brewery.phone.replace(/'/g, "''") : null}', 
            '${brewery.website_url ? brewery.website_url.replace(/'/g, "''") : null}' 
        )`).join(',');
      const content = `
        INSERT INTO breweries (
            name,
            street,
            city,
            state,
            postal_code,
            country,
            phone,
            website_url
        )
        VALUES ${values};
      `
      fs.appendFile('migrations/seeds.sql', content, err => {
        if (err) {
          return console.error(err);
        }
        console.log("file written successfully")
      });
    })
    .then(() => {
      console.log('Data inserted into breweries table');
    })
    .catch(error => console.error(error))
};