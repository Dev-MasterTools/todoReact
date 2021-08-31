const express = require("express");

//declrearing router
const router = express.Router();


router.get("/", async (req,res) => {
    try{
        res.json({
            status:200,
            message: "Data collected sucessfully",
        });
    }
    catch(error)
    {
        console.error(error);
        return res.status(500).send("Server error");
    }
});


module.exports = router;