const express = require("express");
const router = express.Router();
const TemplateModel = require("../models/TemplateModel");

router.post("/live-templates", async (req, res) => {
    try {
        const { liveTempId } = req.body;
        const tempData = await TemplateModel.findOne({
            'myTemplates.liveTempId': liveTempId
        }, { "myTemplates.$": 1 });

        if (!tempData)
            return res.json({ success: false });
        res.json({success: true, tempData: tempData.myTemplates[0]})
    } catch (err) {
        console.log("Errors on fetching live templates!", err);
    }
})

module.exports = router;