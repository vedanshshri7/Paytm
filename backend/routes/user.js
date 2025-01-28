const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken")
const zod = require('zod');
const JWT_SECRET = require('../config');

const signupSchema = zod.object({
    username : zod.string(),
    password : zod.string(),
    firstname : zod.string(),
    lastname : zod.string()
})

router.post("/signup",async(req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);

    if(!success){
      return res.json({
        message : "Email is incorrect/Invalid input"
      })
    }
    const user = User.findOne({
      username : body.username
    })
    if(user._id){
      return res.json({
        message : "Email is incorrect/Invalid input"
      })
    }
    
    const dbUser = await User.create(body);
    const token = jwt.sign({
      userId: dbUser._id
    },JWT_SECRET)
    res.json({
      message : "User Created Successfully",
      token : token
    })


})

module.exports = router;


