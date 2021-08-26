const {Pool} = require('pg');
const uri = 'postgres://nvrekaja:2V3MJidyKtPJ-_Y2VyStRUoDuLVJqAkD@kashin.db.elephantsql.com/nvrekaja'
const fs = require('fs');
const bestArrayEver = JSON.parse(fs.readFileSync('thebestarrayever.txt','utf8'))
console.log(bestArrayEver);

//const PG_URI = uri.get('PG_URI');

const pool = new Pool({
  connectionString: uri,
});

db = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

const text = `INSERT INTO art (title, artist_display, date_display, alt_text, medium_display, image_id, url)
VALUES ($1,$2,$3,$4,$5,$6,$7)`

const doitall = async()=>{
for await (const object of bestArrayEver){
const {title, artist_display, date_display, alt_text, medium_display, image_id, url} = object;
const values = [title, artist_display, date_display, alt_text, medium_display, image_id, url];
await db.query(text,values);

}
}
doitall();