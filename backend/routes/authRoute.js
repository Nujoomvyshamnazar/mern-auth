const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()
const { registerUser,loginUser,userData,updateUser } = require("../controllers/authController")



router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/userdata',authMiddleware,userData)
router.post('/update', updateUser)

module.exports = router;