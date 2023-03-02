const fetch = require('node-fetch');
const { Pool } = require('pg');
require('dotenv').config();

// Connect to the PostgreSQL database
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});


// Retrieve data from the Open Brewery DB API
fetch(process.env.API_URL)
  .then(response => response.json())
  .then(data => {
    // Insert the data into the breweries table
    const values = data.map(brewery => `(
            '${brewery.name}',
            '${brewery.street}',
            '${brewery.city}',
            '${brewery.state}',
            '${brewery.postal_code}',
            '${brewery.country}',
            '${brewery.phone}',
            '${brewery.website_url}'
        )`).join(',');
    return pool.query(`
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
            VALUES ${values}
        `);
  })
  .then(() => {
    console.log('Data inserted into breweries table');
    pool.end();
  })
  .catch(error => console.error(error));