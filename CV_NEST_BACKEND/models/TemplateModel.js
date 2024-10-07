const mongoose = require("mongoose");

const TemplateSchema = new mongoose.Schema({
    userPrimaryId: {
        type: String,
        unique: true
    },
    myTemplates: {
        type: Array
    }
})

const TemplateModel = mongoose.model('MyTemplates', TemplateSchema);
module.exports = TemplateModel;