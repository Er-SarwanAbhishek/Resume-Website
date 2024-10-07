const express = require("express")
const router = express.Router()
const ContactModel = require("../models/ContactModel")
router.post('/contact', async(req,res)=>{
    const {name, email, message} = req.body;
    try{
        const newContact = new ContactModel({
            name,email,message
        });
        await newContact.save();
        res.status(201).json({success: true, message: "Thank you for contacting Us. Your team will reach you shortly!"});
    } catch(error){
        console.log('Error saving contact form data:', error.message);
        res.status(400).json({ success: false, error: "Server Error. Please try again later!" });
    }
})

module.exports = router;