const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.json({message: "9ayed nik omk"})
}


router.post('/signup',passport.authenticate('local.signup'))

module.exports = router