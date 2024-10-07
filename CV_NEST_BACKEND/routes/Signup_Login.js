const express = require("express");
const GoogleAuth = require("../models/GoogleAuth");
const SignupModel = require("../models/SignupModel");
const jsonwebtoken = require("jsonwebtoken");
const jwt_secret_code = "CVnestSeCureTYforLogin321@#";
const router = express.Router();



// SIGNUP BY GOOGLE LOGIN
router.post("/google-signup", async (req, res) => {

    const { id, email, name, picture } = req.body;

    try {

        const AuthDetails = await GoogleAuth.findOne({ email });

        // CHECKING EXISTING
        if (AuthDetails) {
            const jwt_data = {
                id: AuthDetails._id
            }
            const authtoken = jsonwebtoken.sign(jwt_data, jwt_secret_code);
            return res.json({ success: true, userData: AuthDetails, authtoken });
        }
        const saveUserData = await GoogleAuth.create({
            googleId: id,
            email: email,
            name: name,
            profilePicture: picture
        })

        const jwt_data = {
            id: saveUserData._id
        }
        const authtoken = jsonwebtoken.sign(jwt_data, jwt_secret_code);

        res.json({ success: true, userData: saveUserData, authtoken });
    } catch (err) {
        res.status(400).json({ success: false });
    }
})

// SIGNUP BY EMAIL AND PASSWORD
router.post("/email-signup", async (req, res) => {

    const { fullName, email, confirmPassword } = req.body;


    try {
        const AuthDetails1 = await GoogleAuth.findOne({ email });
        const AuthDetails2 = await SignupModel.findOne({ email });

        if (AuthDetails1 || AuthDetails2)
            return res.status(400).json({ success: false, message: "This email already exists." });

        const saveUserData = await SignupModel.create({
            name: fullName, email, password: confirmPassword, profilePicture: "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?t=st=1719225417~exp=1719229017~hmac=d827e4a8d6e0383b6bd4217b17b2a1564742a8d3bc46342708f92c8d3e192249&w=826"
        })
        const jwt_data = {
            id: saveUserData._id
        }
        const authtoken = jsonwebtoken.sign(jwt_data, jwt_secret_code);

        res.json({ success: true, userData: saveUserData, authtoken });

    } catch (error) {
        res.status(400).json({ success: false, message: "There are some server issue." });
    }
})


// LOGIN BY EMAIL AND PASSWORD
router.post("/email-login", async (req, res) => {

    const { email, password } = req.body;


    try {
        const AuthDetails = await SignupModel.findOne({ email });

        if (!AuthDetails)
            return res.status(400).json({ success: false, message: "Invalid email or password." });
        if (password !== AuthDetails.password)
            return res.status(400).json({ success: false, message: "Invalid email or password." });

        const jwt_data = {
            id: AuthDetails._id
        }
        const authtoken = jsonwebtoken.sign(jwt_data, jwt_secret_code);

        res.json({ success: true, authtoken });

    } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, message: "There are some server issue." });
    }
})

module.exports = router;