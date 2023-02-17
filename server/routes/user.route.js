const express = require('express')
const router = express.Router()
const User = require('../models/User')
const passport = require('passport')
const generator = require('generate-password')
const nodemailer =require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.json({message: "Please login",
    status: 401})
}


const { EMAIL_PASS,EMAIL } = process.env

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: EMAIL_PASS
    }
})

router.post('/register',(req,res)=>{
    User.findOne({email: req.body.email},async (err,user)=>{
        if (err)  throw err
        if (user) return res.json({message: "User already exists"})
        if (!user) {
            const newUser = new User({
                email: req.body.email,})
                newUser.password = newUser.hashPassword(req.body.password)
                await newUser.save() 
                res.json({message: "User created"})
        }
    })
})

router.post('/login',(req,res,next)=>{
    passport.authenticate("local.login",(err,user,info)=>{
        if (err) return next(err)
        if (!user) return res.json(info)
        req.logIn(user, function(err){
            if (err) return next(err)
            user.isAuthenticated = true
            return res.json(info)
        })
    })(req, res, next)
})

router.delete("/logout", async(req,res)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.json({message: "Logged out"})
      });
})

router.post("/check",(req,res)=>{
    res.json(req.isAuthenticated())
})


router.post('/forgotPassword',(req,res)=>{
    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(req.body.email)) res.json({message:'Please enter a valid email'})
    else {
        User.findOne({email: req.body.email},async (err,user)=>{
            if (err) throw err
            if (!user) return res.json({message: "User not found"})
            if (user) {
                var code = generator.generate({
                    length: 4,
                    numbers: true,
                    symbols: false,
                    lowercase: false,
                    uppercase: false,
                    excludeSimilarCharacters: true
                })
                var options = {
                    from: EMAIL,
                    to: req.body.email,
                    subject: 'Password Reset',
                    text: 'code : '+ code
                }
                transporter.sendMail(options, (err, info) => {
                    if (err) {
                        console.log(err)
                        res.json(err)
                    } else {
                    User.updateOne({email: req.body.email},{codeVerification: code}, (err)=>{
                        if (err) return res.json(err)
                        res.json({message: "Mot de passe de réinitialisation du code envoyé"})
                    })
                    }
                })
            }
        })
    }
})

router.post('/verifCode',(req,res)=>{
    User.findOne({email: req.body.email},async (err,user)=>{
        if (err) throw err
        if (!user) {res.json({message: "User not found"})}
        if (user) {
            if (user.codeVerification == req.body.code) {
                res.json({
                    status: 'success',
                    message: 'Code verified'
                })
            }
            else {
                res.json({
                    status: 'error',
                    message: 'Code not verified'
                })
            }
        }
    })
})
router.patch('/changePassword',(req,res)=>{
    User.findOne({email: req.body.email},async (err,user)=>{
        if (err) throw err
        if (!user) {res.json({message: "User not found"})}
        if (user) {
            const newUser = user
            newUser.password = newUser.hashPassword(req.body.password)
            User.updateOne({email : req.body.email}, {password: newUser.password}, (err)=>{
                if (err) return res.json(err)
                res.json({
                    status:'success',
                    message: 'Password changed'
                })
            })
        }
    })
})
module.exports = router