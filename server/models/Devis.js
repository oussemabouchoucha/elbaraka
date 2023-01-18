const mongoose = require('mongoose')

const devisSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: false
    },
    prenom: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    code_postal: {
        type: String,
        required: false
    },
    adresse: {
        type: String,
        required: false
    },
    ville: {
        type: String,
        required: false
    },
    natel: {
        type: String,
        required: false
    },
    sujet: {
        type: String,
        required: false
    },
    message:{
        type: String,
        required: false
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    is_done: {
        type: Boolean,
        default: false
    }
})

let Devis = mongoose.model('Devis', devisSchema)

module.exports = Devis