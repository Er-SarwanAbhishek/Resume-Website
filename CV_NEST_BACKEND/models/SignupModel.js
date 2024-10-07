const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    profilePicture: {
        type: String
    }
})

const SignupModel = mongoose.model('SignupByEmail', SignupSchema);
module.exports = SignupModel;