const express = require('express');
const path = require('path');
// import cookieParser from 'cookie-parser';
// import dotenv from 'dotenv';
// const userRouter = require('./routes/user.js');
// const imageRouter = require('./routes/api.js');
//const apiRouter = require('./routes/user')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cookieParser());

// statically serve everything in the build folder on the route '/build'
app.use(express.static(path.resolve('../build')));
// TODO: comment out when ready Landing Page 
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

// Login Page 

app.get('/login',(req, res) => {
  return res.redirect('/login');
});

// LOG OUT ?
// app.get('/logout', (req, res) => {
//   return res.redirect('/')
// })

// this is the call to get all the files from the sql DB 
app.get ('/home', (req, res) => {
  console.log(req.body, 'received at /app/home');
  console.log('res.locals from app/home/get', res.locals);
  return res.status(200).json(res.locals);
});

/**
 * define route handlers
 */

// app.use('/api/user', userRouter);
app.use('/api/user', (req, res)=>{
  console.log(req.body, 'recieved at /api/user');
  return res.send(req.body);
});
// app.use('/api/images', imageRouter);
app.use('/api/images', (req, res)=>{
  console.log(req.body, 'recieved at /api/images');
  return res.send(req.body);
});
//app.use('/api', apiRouter);


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

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
