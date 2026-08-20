const express = require('express');
const {
     registerUser, 
     loginUser,
     forgotPassword,
     resetPassword,
     getMyProfile,
   
     
     } = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);

//loged in user can access this route
router.get("/me", authMiddleware, getMyProfile);



module.exports = router;