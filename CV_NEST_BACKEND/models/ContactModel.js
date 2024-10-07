const mongoose = require('mongoose')

const Contactschema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
})

const ContactModel = mongoose.model("Contact", Contactschema)
module.exports = ContactModel