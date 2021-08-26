const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const loginController = require('../controllers/loginController');


// router.get('/', loginController, (req, res)=> {
//     res.status(200).json(res.locals.users);
// });

// router.get('/google', loginController,(req, res) => {
//     res.status(200).json(res.locals.users);
// })

module.exports = router;