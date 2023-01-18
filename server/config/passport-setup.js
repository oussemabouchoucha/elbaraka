const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const User = require('../models/User')

// saving user object in the session

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
 
// register user
passport.use('local.signup', new localStrategy({
    usernameField : 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req,email,password, done)=> {
        User.findOne({email: email}, (err,user)=> {
            if(err) {
                console.log(err)
                return done(err)
            }
            if(user) {
                console.log("user")
                return done(null, false,{ message: 'deja mawjod' })
            }

            if (!user) {
                console.log("c bn")
                //create user
                let newUser = new User()
                newUser.email = req.body.email
                newUser.password = newUser.hashPassword(req.body.password),
                newUser.save ((err,user)=> {
                    if(!err) {
                        return done(null, user, { message: 'c bn' })
                    } else {
                        console.log(err)
                    }
                })
            }
        })
}))

//login strategy

passport.use('local.login', new localStrategy({
    usernameField:'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req,email,password, done)=> {

    //find user
    User.findOne({email: email}, (err,user)=> {

        if (err) {
            return done(null, false, req.flash('error', 'Something wrong happened'))
        } 
        if(!user) {
            return done(null, false, req.flash('error', 'user was not found'))
        }
        if (user) {
            if (user.comparePasswords(password, user.password)) {

                return done(null,user, req.flash('info', ' Welcome'))

            } else {
                return done(null,false, req.flash('error', ' password is wrong'))

            }
        }
    })
}))