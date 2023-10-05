const express = require('express')
const router = express.Router();
const User = require('../models/User')
router.post("/creatuser",async(req,res)=>{
    try {
        await User.create({
            name:"arpit",
            password:"123456",
            email:"agrawalarpit414@gmail.com",
            location:"qweryt"
        })
        res.json({success:true})
    } catch (error) {
        console.log(error)
    }
})