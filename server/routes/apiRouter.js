const express = require('express');

const router = express.Router();
const apiController = require('../controllers/apiController');
const authController = require('../controllers/authController');
const loginController = require('../controllers/loginController');


//router.get('/images',(req, res) => res.status(200).json({}));

//router.post('/like', apiController.like, (req, res) => res.status(200).json({})); // something is missing here



//router.put('/dislike', apiController, (req, res) => res.status(200).json({}))



module.exports = router;