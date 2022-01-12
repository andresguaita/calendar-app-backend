const express = require('express')
const { check } = require('express-validator')
const router = express.Router()

const { createUser, tokenRenew, loginUser } = require('../controllers/auth')
const { fieldValidated } = require('../middlewares/fields-validator')

router.post('/register',[
    check('name','Name is required').not().isEmpty(),
    check('email','Email is required').isEmail(),
    check('password','Password is required').not().isEmpty(),
    check('password','Password must be at least 6 characters').isLength({min: 6}),
    fieldValidated

],
createUser)

router.post('/',[
    check('email','Email is required').isEmail(),
    check('password','Password is required').not().isEmpty(),
    check('password','Password must be at least 6 characters').isLength({min: 6}),
    fieldValidated

],loginUser)

router.get('/renew',tokenRenew)

module.exports = router;