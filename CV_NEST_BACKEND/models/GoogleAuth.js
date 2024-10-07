const mongoose = require('mongoose');

const GoogleSignupSchema = new mongoose.Schema({
    googleId: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    name: {
        type: String
    },
    profilePicture: {
        type: String
    }
});

const GoogleSignupModel = mongoose.model('GoogleSignup', GoogleSignupSchema);
module.exports = GoogleSignupModel;