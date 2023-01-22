const express = require('express')
const app = express()
require('./config/database')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
require('./config/passport-setup')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const {PORT} = process.env

// bring body parser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors());

// session config .
app.use(session({
    secret: 'secretcode',
    saveUninitialized: true,
    resave:true,
}))

// bring passport 
app.use(passport.initialize())
app.use(passport.session())
//store user object 

app.use((req,res,next)=>{
    next();
})

//store user object 
app.get('*', (req,res,next)=> {
    res.locals.user = req.user || null
    console.log(req.locals)
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


app.listen(PORT,()=>{
    console.log(`app is working on port ${PORT}`);
})