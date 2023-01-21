const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config()
const {DB_PASS} = process.env

let db = mongoose.connect(`mongodb+srv://elbarakaServices:${DB_PASS}@cluster0.rymsrzc.mongodb.net/elbarkaDb?retryWrites=true&w=majority`,
{ useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected to MongoDB")
    }
})