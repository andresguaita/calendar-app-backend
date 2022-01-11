const express = require('express')
const router = express.Router()

const { createUser, tokenRenew, loginUser } = require('../controllers/auth')

router.post('/register',createUser)

router.post('/',loginUser)

router.get('/renew',tokenRenew)

module.exports = router;