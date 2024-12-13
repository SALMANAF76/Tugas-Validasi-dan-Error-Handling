const express = require('express');
const registerUser = require('../controllers/userController');
const userRegisterValidation = require('../middlewares/userRegisterValidation');
const router = express.Router();

router.post('/register', userRegisterValidation, registerUser);

module.exports = router;