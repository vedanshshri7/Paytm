const express = require("express");

const userRouter = require("./user")

const router = express.Router();

router.get("/api/v1", function (req, res, next) {
    console.log("Router Working");
    res.end();
})
router.use("/user",userRouter);

module.exports = router;


