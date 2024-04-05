const express = require("express");
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { User, Mail } = require("../db");
const { JWT_SECRET } = require("../config");
const {authMiddleware} = require("../middleware");


const signupSchema = zod.object({
    username: zod.string(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post("/signup", async(req, res)=> {
    const  body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.json({
            message: "Email already taken/ incorrect inputs"
        })
    }

    const existingUser =User.findOne({
        username: body.username
    })

    if(existingUser._id){
        return res.json({
            message: "Email already taken"
        })
    }
    const dbUser = await User.create(body);
    const userId= dbUser._id;

 
    
    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })


})


const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
})

router.post("/signin", async(req, res)=>{
    
    const {success} = signinSchema.safeParse(req.body)
    if(!success){
        return res.json({
            message:"Incorrect inputs"
        })
    }
    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });
    
    if(user){
        const token = jwt.sign({
            userId: user,_id
        , JWT_SECRET});

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in"
    })
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
  
})

router.put("/", authMiddleware, async(req, res)=> {
    const {success} = updateBody.safeParse(req.body)
    if(!success){
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body,{
        _id: req.userId})

        res.json({
            message: "Updated successfully"
        })
})

const sendMail = zod.object({
    sender:zod.string(),
    recepient:zod.string(),
    subject: zod.string(),
    body:zod.string(),
    timeStamp:zod.number()
})

router.post("/composemail", authMiddleware, async(req, res)=>{
    const body = req.body;
    const {success} = sendMail.safeParse(body)
    if(!success){
        res.status(411).json({
            message: "Error while composing the mail"
        })
    }
    const recepientExists =User.findOne({
        recepient: body.recepient
    })

    if(!recepientExists){
        return res.json({
            message: "No such recepient exists"
        })
    }
    await Mail.create(body)

        res.json({
            message: "Mailed successfully"
        })

})

router.get("/bulk", async(req,res)=> {
    const filter = req.query.filter || "";
    

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter               
            }
        }, {
            lastName: {
                "$regex": filter
            }
          
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })



})
module.exports = router;

