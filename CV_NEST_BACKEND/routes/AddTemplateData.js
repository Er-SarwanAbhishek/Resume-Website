const express = require("express");
const DecodeToken = require("../middleware/DecodeJWT");
const TemplateModel = require("../models/TemplateModel");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

router.put("/add-template", DecodeToken, async (req, res) => {
    const eachTempUniqueId = uuidv4();
    try {
        const currentTemplate = req.body;
        currentTemplate.liveTempId = eachTempUniqueId;

        const userId = req.id;
        const tempModel = await TemplateModel.findOne({ userPrimaryId: userId });

        //CHECK THIS USER HAVE ALREADY SOME TEMPLATES OR NOT
        if (!tempModel) {
            await TemplateModel.create({
                userPrimaryId: userId,
                myTemplates: currentTemplate
            })
            console.log("not find");
            return res.json({ success: true, currentTemplate });
        }

        //IF TEMPLATES ALREADY EXISTS
        const findTemp = await TemplateModel.findOne({ "myTemplates.id": currentTemplate.id, userPrimaryId: userId });
        if (findTemp) {
            const matchingTemplate = findTemp.myTemplates.find(template => template.id === currentTemplate.id);
            return res.json({ success: true, currentTemplate: matchingTemplate });
        }

        //PUSH OBJECT TO MY TEMPLATES
        tempModel.myTemplates.push(currentTemplate);
        await tempModel.save();
        res.json({ success: true, currentTemplate });
    } catch (error) {
        console.log("Error on adding templates.", error);
    }
})

//DELETE TEMPLATES
router.delete("/delete-templates", DecodeToken, async (req, res) => {
    try {
        const { tempId } = req.body;
        const userId = req.id;
        const filter = { "myTemplates.id": tempId, userPrimaryId: userId };
        const update_data = {
            $pull: {
                myTemplates: { id: tempId }
            }
        };

        const updatation = await TemplateModel.updateOne(filter, update_data);
        if (updatation.nModified < 0)
            return res.json({ success: false, message: "Server error." });

        res.json({ success: true });
    } catch (error) {
        console.log("Errors on deleting template.", error);
    }
})

//UPDATE TEMPLATES
router.post("/update-templates", DecodeToken, async (req, res) => {
    try {
        const userId = req.id;
        const currentTemplateData = req.body;
        const { id } = currentTemplateData;

        const currentUser = await TemplateModel.findOne({ userPrimaryId: userId });

        let tempIndex = currentUser.myTemplates.findIndex(templates => templates.id === id);
        if (tempIndex < 0)
            return res.json({ success: false, message: "Server error." });

        currentUser.myTemplates[tempIndex] = currentTemplateData;
        await currentUser.save();
        res.json({ success: true })
    } catch (error) {
        console.log("Errors on updating template.", error);
    }
})

module.exports = router;