const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// import dotenv from 'dotenv';
const apiRouter = require('./routes/apiRouter.js');
const loginRouter = require('./routes/loginRouter.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.resolve('../build')));
// TODO: comment out when ready Landing Page 


// Login Page 

app.use('/login', loginRouter);
app.use('/api', apiRouter);

// this is the call to get all the files from the sql DB 
app.get ('/home', (req, res) => {
  console.log(req.body, 'received at /app/home');
  console.log('res.locals from app/home/get', res.locals);
  return res.status(200).json(res.locals);
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

/**
 * define route handlers
 */

/**
 * 404 handler
 */
app.use('*', (req, res) => res.status(404).send('Not Found'));

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  if (err) console.error(err);
  return res.status(500).send('Internal Server Error');
});

module.exports = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
