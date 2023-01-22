const express = require('express')
const router = express.Router()
const Devis = require('../models/Devis')

isAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) return next()
    res.json({message: "Please login",
        status: 401})
}

router.post('/save',(req,res)=> {
    let newDevis = new Devis({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email:req.body.email,
        code_postal: req.body.code_postal,
        adresse : req.body.adresse,
        ville: req.body.ville,
        natel: req.body.natel,
        sujet: req.body.sujet,
        message: req.body.message
    })

    newDevis.save( (err)=> {
        if(!err) {
            res.json({"success":"ok"})
        } else {
            console.log(err)
        } 
    })
})

router.get('/getAll',(req,res)=> {
    Devis.find({},(err,devis)=> {
        if(err) {
            console.log(err)
        }
        else {
            res.json(devis)
        }
})
})

router.patch('/update/:id',(req,res)=> {
       let query = {_id : req.params.id}

       Devis.updateOne(query, {is_done: true}, (err)=> {
           if(!err) {
                res.json({"success":true})
           } else {
               console.log(err)
           }
       })
})

module.exports = router