const express = require('express');
const { reigisterUser, loginuser } = require('../controllers/authController');


const router = express.Router();



router.route('/').post(reigisterUser)
router.route('/login').post(loginuser)










module.exports = router