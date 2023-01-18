const express = require('express')
const app = express()
require('./config/database')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const passportSetup = require('./config/passport-setup')
const cors = require('cors')


// bring body parser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

app.use(session({
    secret: 'lorem ipsum',
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 60000 * 15}
}))

// bring passport 
app.use(passport.initialize())
app.use(passport.session())
//store user object 

app.get('*', (req,res,next)=> {
    res.locals.user = req.user || null
    next()
})

app.get('/', (req,res)=> {
   res.json("success")    
})

// bring user routes
const users = require('./routes/user.route')
app.use('/users', users)

const devis = require('./routes/devis.route')
app.use('/devis', devis)


app.listen(5000,()=>{
    console.log('app is working on port 5000');
})