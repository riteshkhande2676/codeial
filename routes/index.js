const express = require('express');

// included the express router
const router = express.Router();

// contain the controller files 
const homeController = require('../controller/homeController');
const userProfile = require('../controller/userProfile');
const likePage = require('../controller/likePage');


console.log('router loaded');
// get a request from controller object
router.get('/', homeController.home);
router.get('/profile', userProfile.profile);
router.get('/likepage', likePage.likes);


// exports router
module.exports = router;