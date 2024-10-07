const express = require("express");
const DecodeToken = require("../middleware/DecodeJWT");
const GoogleAuth = require("../models/GoogleAuth");
const SignupModel = require("../models/SignupModel");
const TemplateModel = require("../models/TemplateModel");
const router = express.Router();

router.post("/user-data", DecodeToken, async (req, res) => {
    try {
        const userId = req.id;
        const userDetails1 = await GoogleAuth.findById(userId);
        const userDetails2 = await SignupModel.findById(userId);

        if (userDetails1) {
            return res.json({ name: userDetails1.name, profilePicture: userDetails1.profilePicture });
        }

        if (userDetails2) {
            return res.json({ name: userDetails2.name, profilePicture: userDetails2.profilePicture });
        }

    } catch (err) {
        console.log(err);
    }
})

//FETCH TEMPLATES
router.post("/templates", DecodeToken, async (req, res) => {
    try {
        const userId = req.id;
        const templates = await TemplateModel.findOne({ userPrimaryId: userId });
        res.json({ templates: templates.myTemplates });
    } catch (error) {
        console.log("Errors by fetching templates: ", error);
    }
})

module.exports = router;