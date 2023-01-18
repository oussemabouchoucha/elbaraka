const mongoose = require("mongoose")
let db = mongoose.connect('mongodb+srv://elbarakaServices:e8fiEPsXWtkKnJor@cluster0.rymsrzc.mongodb.net/elbarkaDb?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Connected to MongoDB")
    }
})