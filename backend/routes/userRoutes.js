const express = require('express');
const { reigisterUser, loginuser } = require('../controllers/authController');
const { validateSignupRequest, isRequestValidated } = require('../validator/auth');


const router = express.Router();



router.route('/').post(validateSignupRequest, isRequestValidated, reigisterUser)
router.route('/login').post(loginuser)










module.exports = router