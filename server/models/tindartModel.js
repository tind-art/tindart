const { Pool } = require('pg');
//const uri = require('../config/uri.json');

/*

DB Setup

PG_URI is a private variable which is not checked into source control.

To config the app with elephant db:
1 . add a config folder at the project root
2.  add a uri.json file in the folder
3.  inside the uri.json file add {"PG_URI": "<YOUR_DB_URI>"}

https://www.elephantsql.com/docs/index.html

*/

// Import elephant db connection string.
const uri = 'postgres://nvrekaja:2V3MJidyKtPJ-_Y2VyStRUoDuLVJqAkD@kashin.db.elephantsql.com/nvrekaja'
const PG_URI = uri;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};